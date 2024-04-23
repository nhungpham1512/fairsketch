const ADD_INVOICE_BTN = '//a[@title="Add invoice"]';
const BILL_DATE_SELECTOR = '//input[@name="invoice_bill_date"]';
const DUE_DATE_SELECTOR = '//input[@name="invoice_due_date"]';
const INVOICE_CLIENT_SELECTOR = '//label[@for="invoice_client_id"]/parent::div//div[@id="s2id_invoice_client_id"]';
const INVOICE_CLIENT_OPTION = '//ul[@id="select2-results-17"]//div[contains(text(),"{text}")]';

const INVOICE_PROJECT_SELECTOR = '//label[@for="invoice_project_id"]/parent::div//input[@role="button"]';
const INVOICE_TAX_SELECTOR = '//label[text()="TAX"]/parent::div//span[@class="select2-chosen"]';
const INVOICE_TAX_OPTION = '//ul[@class="select2-results"]//div[contains(text(),"{text}")]';
const INVOICE_SECOND_TAX_SELECTOR = '//label[text()="Second TAX"]/parent::div//span[@class="select2-chosen"]';
const INVOICE_TDS_SELECTOR = '//label[text()="TDS"]/parent::div//span[@class="select2-chosen"]';
const RECURRING_CHECKBOX = '//input[@name="recurring"]';
const REPEAT_EVERYDAY_TXT = '//input[@name="repeat_every"]';
const REPEAT_EVERYDAY_SELECTOR = '//input[@name="repeat_every"]/parent::div//following-sibling::div';
const REPEAT_EVERYDAY_OPTION = '//ul[@class="select2-results"]//div[text()="Week(s)"]';
const CYCLE_TXT = '//label[text()="Cycles"]/parent::div//input';
const SAVE_BTN = '//button[@type="submit"]';

module.exports= {ADD_INVOICE_BTN 
    ,BILL_DATE_SELECTOR 
    ,DUE_DATE_SELECTOR 
    ,INVOICE_CLIENT_SELECTOR 
    ,INVOICE_CLIENT_OPTION 
    ,INVOICE_PROJECT_SELECTOR 
    ,INVOICE_TAX_SELECTOR 
    ,INVOICE_TAX_OPTION 
    ,INVOICE_SECOND_TAX_SELECTOR 
    ,INVOICE_TDS_SELECTOR 
    ,RECURRING_CHECKBOX
    ,REPEAT_EVERYDAY_TXT
    ,REPEAT_EVERYDAY_SELECTOR
    ,REPEAT_EVERYDAY_OPTION 
    ,CYCLE_TXT 
    ,SAVE_BTN }