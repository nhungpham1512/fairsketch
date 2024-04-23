import DashBoardUI from '../ui/DashBoardUI';
import InvoicesUI from '../ui/InvoicesUI';
import Invoice from '../entities/Invoice';


class CreateInvoice{
     invoice = new Invoice()
    createAnInvoice(invoice){
        cy.xpath(DashBoardUI.SIDE_BAR_MENU_SALE_HREF).click()
        cy.xpath(DashBoardUI.SIDE_BAR_MENU_INVOICE_HREF).click({ force: true })
        cy.xpath(InvoicesUI.ADD_INVOICE_BTN).click()
        cy.wait(2000)
        //fill in invoice form
        cy.xpath(InvoicesUI.BILL_DATE_SELECTOR).clear()
        cy.xpath(InvoicesUI.BILL_DATE_SELECTOR).type(invoice.getBillDate())
        cy.xpath(InvoicesUI.DUE_DATE_SELECTOR).clear()
        cy.xpath(InvoicesUI.DUE_DATE_SELECTOR).type(invoice.getDueDate())

        // cy.xpath('//label[@for="company_id"]/parent::div//span[@id="select2-chosen-17"]').click()
        ////cy.xpath('//ul[@id="select2-results-17"]//div[text()="Awesome Demo Company"]').click()
        // cy.xpath('//ul[@id="select2-results-17"]//li').each($element=>{
        //     if($element.text()==='Awesome Demo Company'){
        //         cy.wrap($element).click()
        //     }
        // })

        cy.xpath(InvoicesUI.INVOICE_CLIENT_SELECTOR).click()
        cy.xpath(InvoicesUI.INVOICE_CLIENT_OPTION.replace("{text}",invoice.getInvoiceClient())).click()
        cy.xpath(InvoicesUI.INVOICE_PROJECT_SELECTOR).type(invoice.getInvoiceProject()+'{enter}', { force: true })     
        cy.xpath(InvoicesUI.INVOICE_TAX_SELECTOR).click({ force: true })
        cy.xpath(InvoicesUI.INVOICE_TAX_OPTION.replace("{text}",invoice.getInvoiceTax())).click()
        cy.xpath(InvoicesUI.INVOICE_SECOND_TAX_SELECTOR).click({ force: true })
        cy.xpath(InvoicesUI.INVOICE_TAX_OPTION.replace("{text}",invoice.getInvoiceSecondTax())).click()
        cy.xpath(InvoicesUI.INVOICE_TDS_SELECTOR).click({ force: true })
        cy.xpath(InvoicesUI.INVOICE_TAX_OPTION.replace("{text}",invoice.getInvoiceSecondTax())).click()
        cy.xpath(InvoicesUI.RECURRING_CHECKBOX).click()
        cy.xpath(InvoicesUI.REPEAT_EVERYDAY_TXT).clear({ force: true })
        cy.xpath(InvoicesUI.REPEAT_EVERYDAY_TXT).type('3',{ force: true })
        cy.xpath(InvoicesUI.REPEAT_EVERYDAY_SELECTOR).click()
        cy.xpath(InvoicesUI.REPEAT_EVERYDAY_OPTION).click()
        cy.xpath(InvoicesUI.CYCLE_TXT).clear({ force: true })
        cy.xpath(InvoicesUI.CYCLE_TXT).type('2',{ force: true })
        cy.xpath(InvoicesUI.SAVE_BTN).click()
        cy.wait(3000)
    }

}

module.exports = CreateInvoice