"use strict";

function Hero( name, secretIdentity, health, isAlive = true ) {
    this.secretIdentity = secretIdentity
    LivingThing.call( this, name, health, isAlive = true )
}

Hero.prototype = {
    attack: function ( monster ) {
        let mLoss = Math.floor( Math.random() * 10 )
        console.log( monster.name + "'s health (" + monster.health + ") reduced by " + mLoss + "." )
        monster.health -= mLoss

        if ( monster.health <= 0 ) monster.isAlive = false

        let hLoss = Math.floor( Math.random() * 10 )
        console.log( this.name + "'s health (" + this.health + ") reduced by " + hLoss + "." )
        this.health -= hLoss

        if ( this.health <= 0 ) this.isAlive = false
    },

    fight: function ( monsters ) {
        for( let monster of monsters ) {
            while( monster.isAlive && this.isAlive ) {
                this.attack( monster )
            }
        }
    }
}
