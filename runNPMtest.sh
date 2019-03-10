#!/usr/bin/env bash

#VALIDATE INPUT PARAMETERS
ENV_coverage=${COVERAGE_THRESHOLD:?' missing environment variable : COVERAGE_THRESHOLD'}
ARG_npmCmd=${@:?" missing argument : npm command. Sample: $0 'npm run test:update'"}

#INITIALIZE VARS
LOCAL_buildStatus=0
LOCAL_failed=0
LOCAL_resultsArray=()
LOCAL_workSpace=`dirname $0`
LOCAL_resultsFile="$LOCAL_workSpace/npmRunResults"

#RUN NPM COMMAND
runNPMcmd(){
   local cmd="${1:?${FUNCNAME[0]} : error : missing cmd}"
   $cmd 2>&1 | tee $LOCAL_resultsFile
}

#PARSE UNIT TEST RESULTS -- MUST PASS ALL UNIT TESTS
parseUnitTestResults(){
   LOCAL_unitRes=`grep '^Tests:' $LOCAL_resultsFile|awk -F':' '{print $2}'|sed 's/ *//g'`
   LOCAL_resultsArray=( `echo $LOCAL_unitRes|sed 's/,/ /g'` )
   LOCAL_failed=`printf '%s\n' "${LOCAL_resultsArray[@]}" | grep 'failed' | sed 's/failed//'`
   LOCAL_passed=`printf '%s\n' "${LOCAL_resultsArray[@]}" | grep 'passed' | sed 's/passed//'`
   LOCAL_total=`printf '%s\n' "${LOCAL_resultsArray[@]}" | grep 'total' | sed 's/total//'`
   
   [ "${LOCAL_failed:-0}" != "0"  ] && LOCAL_unitStatus=1   
   return 0
}

#PARSE COVERAGE TEST RESULTS -- ALL MUST PASS THE THRESHOLD LIMIT SET IN THE ENVIRONMENT VARIABLE (COVERAGE_THRESHOLD)
parseCoverageTestResults(){
   LOCAL_covRes=`grep 'All files' $LOCAL_resultsFile`
   LOCAL_stmts=`echo $LOCAL_covRes | awk -F'|' '{print $2}' | sed 's/ *//g'`
   LOCAL_branch=`echo $LOCAL_covRes | awk -F'|' '{print $3}' | sed 's/ *//g'`
   LOCAL_funcs=`echo $LOCAL_covRes | awk -F'|' '{print $4}' | sed 's/ *//g'`
   LOCAL_lines=`echo $LOCAL_covRes | awk -F'|' '{print $5}' | sed 's/ *//g'`
   LOCAL_unCovLines=`echo $LOCAL_covRes | awk -F'|' '{print $6}' | sed 's/ *//g'`
   
   [ `echo |  awk '{ print('$LOCAL_stmts'<'$ENV_coverage') }'`  -ne 0 ] && LOCAL_coverageStatus=1
   [ `echo |  awk '{ print('$LOCAL_branch'<'$ENV_coverage') }'` -ne 0 ] && LOCAL_coverageStatus=1
   [ `echo |  awk '{ print('$LOCAL_funcs'<'$ENV_coverage') }'` -ne 0 ] && LOCAL_coverageStatus=1
   [ `echo |  awk '{ print('$LOCAL_lines'<'$ENV_coverage') }'` -ne 0 ] && LOCAL_coverageStatus=1
   return 0
}

#MAIN FUNCTION
main(){
   local cmd="${1:?${FUNCNAME[0]} : error : missing cmd}"
   
   runNPMcmd "$cmd"
   parseUnitTestResults
   parseCoverageTestResults
   
   [ "$LOCAL_unitStatus" == "1" ] && LOCAL_buildStatus=1 && echo "Unit test cases failed !!"  
   [ "$LOCAL_coverageStatus" == "1" ] && LOCAL_buildStatus=1 && echo "Code coverage tests failed to pass the ${ENV_coverage}% threshold !!" 
   
   return 0
}

main "$ARG_npmCmd"
exit $LOCAL_buildStatus
