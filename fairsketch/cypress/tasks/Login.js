class Login{
    login(){
        cy.visit('/')  
        cy.xpath('//div[text()="Admin"]//following-sibling::div[@class="box-content demo-email"]').click()
        cy.xpath('//div[text()="Admin"]//following-sibling::div[@class="box-content text-right demo-password"]').click()
        cy.xpath('//button[text()="Sign in"]').click()
    }
}

module.exports = Login