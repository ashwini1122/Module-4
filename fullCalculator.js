import { LightningElement,track } from 'lwc';

export default class fullCalculator extends LightningElement {
		
		@track result='';
		@track partialresult='';
		
		onInputChangeHandler(event){
                var numbers=event.target.label;
				this.result=this.result+numbers;
				try {
    				this.partialresult=eval(this.result);
				}catch(e) {
   						if (e instanceof SyntaxError) {
        					this.partialresult="Invalid Expression";
    					}
				}				
		}

		onSymbolClick(event){
                var operation=event.target.label;
                this.result=this.result+operation;
		}

		clearInput(event){
            		this.result='';
			this.partialresult='';
						
        }
        
		handleResult(event){
			try {
    				this.result=eval(this.result);
			}catch(e) {
   					if (e instanceof SyntaxError) {
        				this.result="Invalid Expression";
    				}
			}			
		}
}