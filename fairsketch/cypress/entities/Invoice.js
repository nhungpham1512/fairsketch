class Invoice{
    billDate;
    dueDate;
    invoiceClient;
    invoiceProject;
    invoiceTax;
    invoiceSecondTax;

    constructor(billDate,dueDate,invoiceClient,invoiceProject,invoiceTax,invoiceSecondTax){
        this._billDate=billDate;
        this._dueDate=dueDate;
        this._invoiceClient= invoiceClient;
        this._invoiceProject= invoiceProject;
        this._invoiceSecondTax = invoiceSecondTax;
        this._invoiceTax=invoiceTax;
    };
    
    getBillDate(){
        return this._billDate
    }

    getDueDate(){
        return this._dueDate
    }
    getInvoiceClient(){
        return this._invoiceClient
    }
    getInvoiceProject(){
        return this._invoiceProject
    }
    getInvoiceTax(){
        return this._invoiceTax
    }
    getInvoiceSecondTax(){
        return this._invoiceSecondTax
    }

    setBillDate(newBillDate){
        this._billDate = newBillDate
    }

    setDueDate(newDueDate){
        this._dueDate = newDueDate
    }

    setInvoiceClient(newInvoiceClient){
        this._invoiceClient =newInvoiceClient
    }

    setInvoiceProject(newInvoiceProject){
        this._invoiceProject = newInvoiceProject
    }

    setInvoiceTax(newInvoiceTax){
        this._invoiceTax = newInvoiceTax
    }

    setInvoiceSecondTax(newInvoiceSecondTax){
        this._invoiceSecondTax = newInvoiceSecondTax
    }


}

module.exports= Invoice