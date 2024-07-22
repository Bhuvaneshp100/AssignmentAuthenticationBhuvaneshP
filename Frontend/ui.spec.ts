import {test} from '@playwright/test'
import applicationHome from '../Common/uibase/base'

test.describe.configure({ mode: 'parallel' });
const testcase=applicationHome.uiapplicationHome

test('RelianceDigital Automation',async({page})=>{
  await testcase.performRelianceDigitalAutomation(page)
})

test('tatacliqlocate Automation',async({page})=>{
  await testcase.PerformtatacliqAutomation(page);
})