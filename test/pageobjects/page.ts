import { config } from '../wdio.conf';
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
      //return browser.url(`https://the-internet.herokuapp.com/${path}`)
      return browser.url('https://demoqa.com/')
      //et net= config.baseUrl;

       //console.log("55555:---"+net);//read data from config file
       //browser.url(net+path);
    }
}
