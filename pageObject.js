class automationExercise
{
    visitUrl(){
        return cy.visit('https://www.automationexercise.com/')
    }
    verifyVisitedurl(){
        return cy.url().should('eq','https://www.automationexercise.com/') 
    }
    clickCartButton(){
        return cy.get('ul a[href="/view_cart"]').click()
    }
    verifyCartEmpty(){
        return cy.get('span#empty_cart p.text-center').should('contain','Cart is empty!')
    }
    clickProductButton(){
        return cy.get('ul a[href="/products').click()
    }
    clickMenCategory(){
        return cy.get('a[href="#Men"]')
    }
    clickTshirt(){
        return cy.get('a[href="/category_products/3"]').click({force:true})
    }
    selectVneck(){
        return cy.get("#cartModal").click({force:true})
    }
}     
export default automationExercise