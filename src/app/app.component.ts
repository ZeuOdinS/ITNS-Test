import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DynamicGrid1 } from '../app/dynamic-grid';
import { DynamicGrid2 } from '../app/dynamic-grid2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-demande';
  config : any;
  //collection = [];
  societes = [];

  constructor(private route : ActivatedRoute, private router : Router){
   this.societes =[
    {
      "nom":"AFP",
      "secteur":"Media",
      "activite":"Agence de presse",
      "droits":"LSE",
      "adresse":"adress de afp",
      "codepostal":75002,
      "ville":"Paris",
      "notes":"",
      "tel1":"0140404040",
      "tel2":"0140404040",
      "precision":"",
      "email":"prenom.nom@afp.com",
      "linkedin":"",
  
      "personnel":[
        {
          "titre":"Directeur de l'exploitation",
          "nom":"Martin",
          "prenom":"Jean",
          "tel":"",
          "email":"",
          "rappel":"21/11/2019",
          "linkedin":"",
          "observations":"Texte observations",
          "conversations":[
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            },
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            },
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            }
          ],
          "besoins":[
            {
              "besoin":"besoin 1",
              "ao":"non",
              "cv":"",
              "statut":"en cours"
            },
            {
              "besoin":"besoin 2",
              "ao":"oui",
              "cv":"",
              "statut":"en cours"
            },
            {
              "besoin":"besoin 3",
              "ao":"non",
              "cv":"",
              "statut":"en cours"
            }
          ]
        },
        {
          "titre":"Directeur de vente",
          "nom":"Fillip",
          "prenom":"Ed",
          "tel":"",
          "email":"",
          "rappel":"21/11/2019",
          "linkedin":"",
          "observations":"Texte observations",
          "conversations":[
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            },
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            },
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            }
          ],
          "besoins":[
            {
              "besoin":"besoin 1",
              "ao":"non",
              "cv":"",
              "statut":"en cours"
            },
            {
              "besoin":"besoin 2",
              "ao":"oui",
              "cv":"",
              "statut":"en cours"
            },
            {
              "besoin":"besoin 3",
              "ao":"non",
              "cv":"",
              "statut":"en cours"
            }
          ]
        }
  
      ]
    },
    {
      "nom":"NET",
      "secteur":"Technologie",
      "activite":"Agence IT",
      "droits":"LSE",
      "adresse":"adress de NET",
      "codepostal":75002,
      "ville":"Paris",
      "notes":"",
      "tel1":"0140404040",
      "tel2":"0140404040",
      "precision":"",
      "email":"prenom.nom@net.com",
      "linkedin":"",
  
      "personnel":[
        {
          "titre":"Directeur de l'exploitation",
          "nom":"Martin",
          "prenom":"Jean",
          "tel":"",
          "email":"",
          "rappel":"21/11/2019",
          "linkedin":"",
          "observations":"Texte observations",
          "conversations":[
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            },
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            },
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            }
          ],
          "besoins":[
            {
              "besoin":"besoin 1",
              "ao":"non",
              "cv":"",
              "statut":"en cours"
            },
            {
              "besoin":"besoin 2",
              "ao":"oui",
              "cv":"",
              "statut":"en cours"
            },
            {
              "besoin":"besoin 3",
              "ao":"non",
              "cv":"",
              "statut":"en cours"
            }
          ]
        },
        {
          "titre":"Directeur de production",
          "nom":"Emanuelle",
          "prenom":"Degaul",
          "tel":"",
          "email":"",
          "rappel":"21/11/2019",
          "linkedin":"",
          "observations":"Texte observations",
          "conversations":[
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            },
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            },
            {
              "date":"18/11/19",
              "qualite":"",
              "conversation":"Conversation 1",
              "reponse":"Rép1"
            }
          ],
          "besoins":[
            {
              "besoin":"besoin 1",
              "ao":"non",
              "cv":"",
              "statut":"en cours"
            },
            {
              "besoin":"besoin 2",
              "ao":"oui",
              "cv":"",
              "statut":"en cours"
            },
            {
              "besoin":"besoin 3",
              "ao":"non",
              "cv":"",
              "statut":"en cours"
            }
          ]
        }
  
      ]
    }
  
  ];
  }



  dynamicArray1: Array<DynamicGrid1> = []; 
  dynamicArray2: Array<DynamicGrid2> = []; 
  newDynamic1: any = {}; 
  newDynamic2: any = {}; 

  ngOnInit() {  
    console.log("AAAA : ",this.societes);
    this.newDynamic1 = {date: "", quantite: "",conversation:"",reponse:""}; 
    this.newDynamic2 = {besoin: "", ao: "",cv:"",statut:""};  
    this.dynamicArray1.push(this.newDynamic1); 
    this.dynamicArray2.push(this.newDynamic2);  
    this.config = {
      currentPage : 1,
      itemsPerPage : 1,
      totalItems : 0
    }
    this.route.queryParams.subscribe(
      params=>this.config.currentPage = params['page'] ? params['page']:1
    )
    /*for (let index = 1; index <= 1000; index++) {
      this.collection.push(`item ${index} `);
    }*/
  } 


  pageChange(newPage : number){
    this.router.navigate([''], {queryParams:{page:newPage}});
  }

  addRowConv(index) {    
    this.newDynamic1 = {date: "", quantite: "",conversation:"",reponse:""};  
    this.dynamicArray1.push(this.newDynamic1);  
    console.log(this.dynamicArray1);  
    return true;    
}  
  
deleteRowConv(index) {  
    if(this.dynamicArray1.length ==1) {  
        return false;  
    } else {  
        this.dynamicArray1.splice(index, 1);   
        return true;  
    }  
}

addRowBesoin(index) {    
  this.newDynamic2 = {besoin: "", ao: "",cv:"",statut:""};  
  this.dynamicArray2.push(this.newDynamic2);  
  console.log(this.dynamicArray2);  
  return true;    
}  

deleteRowBesoin(index) {  
  if(this.dynamicArray2.length ==1) {  
      return false;  
  } else {  
      this.dynamicArray2.splice(index, 1);   
      return true;  
  }  
}


}
