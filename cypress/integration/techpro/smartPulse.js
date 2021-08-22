describe("Test Otomasyon Case1",()=>{

    it("first test",()=>{
        cy.visit("https://seffaflik.epias.com.tr/transparency/")
        cy.contains(" ÜRETİM").click({force: true})
        cy.contains(" Planlama").click({force: true})
       
        cy.contains(" KGÜP").click({force: true})
        cy.get("input[id='j_idt219:date1_input']").type("30.04.2020")
        cy.get("input[id='j_idt219:date2_input']").type("30.04.2020")
        cy.contains("Uygula").click({force: true})
        cy.get("img[id='j_idt219:dt:j_idt269']").click()
        
       
    })
    
 
    
    
    
    
    
    })