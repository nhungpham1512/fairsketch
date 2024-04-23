import Login from '../tasks/Login';
import CreateInvoice from '../tasks/CreateInvoice';
import Invoice from '../entities/Invoice';



describe('when Admin create invoice', () => {
    let login = new Login();
    let createInvoice = new CreateInvoice();
   
    it('when Admin create an invoice should create successfully', () => { 
        login.login();
        cy.fixture('invoice').then((data)=>{
            data.forEach(element => {
            let invoiceA = new Invoice(element.billDate,element.dueDate,element.invoiceClient,element.invoiceProject,element.invoiceTax,element.invoiceSecondTax);        
            createInvoice.createAnInvoice(invoiceA);        
            cy.url().should('include', '/invoices/view/')     
            cy.xpath('//div[@class="invoice-title-section"]//h1').then($textCode=>{
                let textCode = '';
                textCode =$textCode.text().trim();
                //cy.log(textCode)
            })
            
            });
        })        
    });
});