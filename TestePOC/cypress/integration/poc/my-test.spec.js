describe('Content Item', function () {
    beforeEach(function(){

        //open entities page
        cy.visit('http://devmain1.mooveng.com:81/entities')

        //open Content Item page
        cy.contains('Content').click()
        })

    it('select a Content item with a topic', function () {

        //find the color element of the Content item page loaded
        cy.get('.mng-color-entity__contentItems').should('be.visible')

        //select a topic from Search, the Back topic
        cy.get('.moove-dropdown--searchable').click().should('be.visible')
        cy.get('.ng-option').should('be.visible').contains('Back').click()

    })

    it('select a Content item without topic',function(){

        //select a Behaviour topic
        cy.get('.moove-dropdown--searchable').click().should('be.visible')
        cy.get('.ng-option').should('be.visible').contains('Behaviour').click()
        cy.get('.no-data-available').contains('No data available').should('be.visible')
    })

    it('check that 20 topic are in search for Content item',function(){
        cy.get('.moove-dropdown--searchable').click()
        cy.get('.ng-option').should('have.length',20)
    })

})