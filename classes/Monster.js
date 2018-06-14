"use strict";

function Monster( name, classification, health, isAlive = true ) {
    this.classification = classification
    LivingThing.call( this, name, health, isAlive = true )
}
