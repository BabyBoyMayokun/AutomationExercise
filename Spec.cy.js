///<reference types="Cypress"/>

import automationExercise from './../pageObject'


describe('AutomationExercise',()=>{
    it('Testing Product and Cart Functionality',()=>{
       const AutomationExercise = new automationExercise

       AutomationExercise.visitUrl()
       AutomationExercise.verifyVisitedurl()

       AutomationExercise.clickCartButton()
       AutomationExercise.verifyCartEmpty()

       AutomationExercise.clickProductButton()
       AutomationExercise.clickMenCategory()
       AutomationExercise.clickTshirt()
       
       
    })
})