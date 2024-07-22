import {test} from '@playwright/test'
import {apiapplicationHome} from '../Common/uibase/uiapibase'



test.describe.configure({ mode: 'parallel' });
const testcase=apiapplicationHome

test('RelianceDigital Automation',async({page})=>{
    await testcase.testRelianceDigitalSearchAPI()
  })
test('Tatacliq Automation',async({page})=>{
  await testcase.testtatacliqSearchAPI()
})