console.log("Super PP MDA Loading...");
class Superppmds{

constructor(){
    window.addEventListener("load", (event:Event) => {
        event.target?.addEventListener('click', (e:Event)=>{
            const targetElement = (e.target as HTMLInputElement)
            if(targetElement?.outerText == "MANAGE ROLES"){
                this.improveRoleManager();
            }
        });
    });
}

private improveRoleManager(){
    setTimeout(() => {
        console.log("szukam role managera");
        
        const dialog = document.getElementById('InlineDialog');
        if(dialog){
            dialog.style.height = "100%"; 
            dialog.style.top = "10px";
            console.log("Role manager powiększony");
            
        }else{
            this.improveRoleManager();
        } 
    }, (1000));
}   
}

const superppmda = new Superppmds();

console.log("Super PP MDA loaded");


function waitForElm(selector:any) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}