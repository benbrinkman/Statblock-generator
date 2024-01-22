/*To do:
- deal with + signs
- add basic options for AC
- update languages to add All, other, and understands options
- figure out how to do attacks
- add a format for spellcasting
- add HP calculation

-if I do get chat gpt implemented - show it the code I am going to put its answer through, then tell it to give me inputs knowing how the code is going to process its input
*/
//D&D stats and options
var ability = [
    "STR",
    "DEX",
    "CON",
    "INT",
    "WIS",
    "CHA"
];
var damageType = [
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder",
    "Bludgeoning, Piercing, and Slashing from nonmagical attacks",
    "Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't adamantine",
    "Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't silvered"
];
var conditionType = [
    "Blinded",
    "Charmed",
    "Deafened",
    "Exhaustion",
    "Frightened",
    "Grappled",
    "Incapacitated",
    "Invisible",
    "Paralyzed",
    "Petrified",
    "Poisoned",
    "Prone",
    "Restrained",
    "Stunned",
    "Unconscious"
];
var specialDamageType = [
    "Bludgeoning, Piercing, and Slashing from nonmagical attacks",
    "Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't adamantine",
    "Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't silvered"
];
var skillList = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight of Hand",
    "Stealth",
    "Survival"
];
var skillAbility = [
    1, //Acrobatics
    4, //Animal Handling
    3, //Arcana
    0, //Athletics
    5, //Deception
    3, //History
    4, //Insight
    5, //Intimidation
    3, //Investigation
    4, //Medicine
    3, //Nature
    4, //Perception
    5, //Performance
    5, //Persuasion
    3, //Religion
    1, //Sleight of Hand
    1, //Stealth
    4, //Survival
];
var senseType = [
    "blindsight",
    "darkvision",
    "tremorsense",
    "truesight"
];
var languageType = [
    "Abyssal",
    "Auran",
    "Aquan",
    "Celestial",
    "Common",
    "Deep Speech",
    "Draconic",
    "Dwarvish",
    "Elvish",
    "Giant",
    "Gnomish",
    "Goblin",
    "Halfling",
    "Infernal",
    "Ignan",
    "Orc",
    "Primordial",
    "Sylvan",
    "Terran",
    "Under common"
];
var sizeType = [
    "Tiny",         //0
    "Small",        //1
    "Medium",       //2
    "Large",        //3
    "Huge",         //4
    "Gargantuan",   //5
    "Colossal"      //6
];
var creatureType = [
    "aberration",   //0
    "beast",        //1
    "celestial",    //2
    "construct",    //3
    "dragon",       //4
    "elemental",    //5
    "fey",          //6
    "fiend",        //7
    "giant",        //8
    "humanoid",     //9
    "monstrosity",  //10
    "ooze",         //11
    "plant",        //12
    "undead"        //13
];
var alignmentType = [
    "lawful good",              //0
    "neutral good",             //1
    "chaotic good",             //2
    "lawful neutral",           //3
    "neutral",                  //4
    "chaotic neutral",          //5
    "lawful evil",              //6
    "neutral evil",             //7
    "chaotic evil",             //8
    "unaligned",                //9
    "any alignment",            //10
    "any good alignment",       //11
    "any neutral alignment",    //12
    "any evil alignment",       //13
    "any lawful alignment",     //14
    "any neutral alignment",    //15
    "any chaotic alignment",    //16
];
var speedType = [
    "speed",
    "fly",
    "hover",
    "burrow",
    "climb",
    "swim"
];



//statblock specific variables
var abilityScore = [
    29, //STR
    26, //DEX
    28, //CON
    20, //WIS
    20, //INT
    20 //CHA
];
var saveProficiencies = [
    true, //STR
    true, //DEX
    true, //CON
    false, //INT
    true, //WIS
    false //CHA
];
var damageResistance = [
    true, //Acid
    true, //Bludgeoning
    false, //Cold
    true, //Fire
    false, //Force
    false, //Lightning
    false, //Necrotic
    true, //Piercing
    false, //Poison
    false, //Psychic
    false, //Radiant
    true, //Slashing
    false, //Thunder
    false, //Bludgeoning, Piercing, and Slashing from nonmagical attacks
    false, //Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't adamantine
    false //Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't silvered
];
var damageImmunity = [
    false, //Acid
    false, //Bludgeoning
    true, //Cold
    false, //Fire
    false, //Force
    true, //Lightning
    false, //Necrotic
    false, //Piercing
    true, //Poison
    false, //Psychic
    false, //Radiant
    false, //Slashing
    true, //Thunder
    false, //Bludgeoning, Piercing, and Slashing from nonmagical attacks
    false, //Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't adamantine
    false //Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't silvered
];
var damageVulnerability = [
    false, //Acid
    false, //Bludgeoning
    false, //Cold
    false, //Fire
    false, //Force
    false, //Lightning
    false, //Necrotic
    false, //Piercing
    false, //Poison
    false, //Psychic
    false, //Radiant
    false, //Slashing
    false, //Thunder
    false, //Bludgeoning, Piercing, and Slashing from nonmagical attacks
    false, //Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't adamantine
    false //Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't silvered
];

var conditions = [
    false, // "Blinded"
    false, // "Charmed"
    false, // "Deafened"
    false, // "Exhaustion"
    false, // "Frightened"
    false, // "Grappled"
    false, // "Incapacitated"
    false, // "Invisible"
    false, // "Paralyzed"
    false, // "Petrified"
    false, // "Poisoned"
    false, // "Prone"
    false, // "Restrained"
    false, // "Stunned"
    false  // "Unconscious"
];

var additionalDamageResistance = [
    "<span class = 'pink'>Damage dealt by hexed creatures</span>"
];
var additionalDamageImmunity = [];
var additionalDamageVulnerability = [];
var additionalConditionImmunity = [
    "<span class = 'pink'>Frightened by hexed creatures</span>"
];
var skillProficiency = [
    false, //Acrobatics
    false, //Animal Handling
    true, //Arcana
    true, //Athletics
    false, //Deception
    true, //History
    false, //Insight
    false, //Intimidation
    false, //Investigation
    false, //Medicine
    false, //Nature
    true, //Perception
    false, //Performance
    false, //Persuasion
    false, //Religion
    false, //Sleight of Hand
    false, //Stealth
    false, //Survival
];
var skillExpertise = [
    false, //Acrobatics
    false, //Animal Handling
    false, //Arcana
    false, //Athletics
    false, //Deception
    false, //History
    false, //Insight
    false, //Intimidation
    false, //Investigation
    false, //Medicine
    false, //Nature
    false, //Perception
    false, //Performance
    false, //Persuasion
    false, //Religion
    false, //Sleight of Hand
    false, //Stealth
    false, //Survival
];
var sense = [
    0, //blindsight
    120, //darkvision
    0, //tremorsense
    0 //truesight
];
var creature = 9;
var alignment = 2;
var size = 4;

var speed = [
    50, //speed
    0,  //fly
    0,  //hover
    0,  //burrow
    0,  //climb
    50  //swim
];

var languageKnown = [
    false, //Abyssal
    false, //Auran
    false, //Aquan
    false, //Celestial
    true, //Common
    false, //Deep Speech
    false, //Draconic
    false, //Dwarvish
    false, //Elvish
    true, //Giant
    false, //Gnomish
    false, //Goblin
    false, //Halfling
    false, //Infernal
    false, //Ignan
    false, //Orc
    false, //Primordial
    false, //Sylvan
    false, //Terran
    false, //Under common
];

var savingThrowAbilities = [
    "Adv. vs spells and magic effects",
    "Indomitable (3)",
    "Legendary Counter"
];

var features = [
    {
        type: "trait",
        header: "<span class='green'>Blood Hex of the Direlord.</span>",
        description: "Azoriandas is bound by a blood oath to kill Tiamat. If she is killed by anyone else or if he passes up an opportunity to kill her, he dies. <span class='pink'>Tiamat is considered hexed</span> by Azoriandas at all times. Azoriandas gains the following bonuses against creatures he has hexed: <ul class='text'> <li>A hexed creature cannot use Legendary Resistance or Indomitable against an effect Azoriandas triggers</li> <li>A Hexed creature has disadvantage on attack rolls against Azoriandas</li> <li>⚔ When Azoriandas hits a hexed creature, it cannot regain hitpoints until the start of his next turn</li> <li>⚔ Azoriandas crits on attack rolls of 18-20 when attacking a hexed creature</li> <li>⚔ Melee Attacks against a hexed creature deal <b><span class='red'>4d6</span></b> bonus damage</li> <li>⚔ When Azoriandas damages a hexed creature, it triggers his Bolstered Fury ability</li> <li>Azoriandas has resistance to all damage dealt by a hexed creature</li> <li>Azoriandas cannot be <b><span class='blue'>frightened</span></b> by a creature he has hexed</li>        </ul>"
    },
    {
        type: "trait",
        header: "Amphibious.",
        description: "Azoriandas can breathe air and water."
    },
    {
        type: "trait",
        header: "Bolstered Fury.",
        description: "When Azoriandas scores a critical hit or <span class='pink'>damages a hexed creature</span>, he gains <b><span class='red'>40</span></b> temp HP. While he has 1 or more of these temp HP, any creature that damages him takes <b><span class='red'>20</span></b> necrotic damage."
    },
    {
        type: "bonusAction",
        header: "(B) Cloud Leap",
        description: "As a bonus action, Azoriandas can leap up to 120 in any direction."
    },
    {
        type: "reaction",
        header: "(R) Legendary Counter.",
        description: "If a creature uses a legendary action to make an attack roll against Azoriandas or that would force him to make a saving throw, he may immediately use his reaction to move up to his movement speed, provoking no opportunity attacks. If the action was an attack roll or saving throw based on an area of effect and he is no longer in the area, he avoids the effect. If the effect is sight based, he avoids it only if he is no longer within sight. If he successfully is no longer targeted by the legendary action, he can use Direbeam directed at the creature that used the legendary action."
    },
    {
        type: "reaction",
        header: "Shards of Opportunity.",
        description: "If a creature provokes an attack of opportunity (20ft. reach), Azoriandas can choose to automatically make an attack without using a reaction as a shard of the blade flies from its place to strike the target before returning to its place. <b><span class='blue'>+19</span>,<span class='red'>2d6+12</span></b> force"
    },
    {
        type: "reaction",
        header: "Indomitable (3 uses).",
        description: "If Azoriandas fails a saving throw, he can choose to succeed instead."
    },
    {
        type: "reaction",
        header: "Magic Resistance.",
        description: "Azoriandas has advantage on saving throws against spells and other magical effects."
    },
    {
        type: "reaction",
        header: "Action Surge.",
        description: "Take an additional action."
    },
    {
        type: "action",
        header: "Multiattack.",
        description: "Azoriandas makes three attacks from the options below. <span class='pink'>If he damages a creature he has hexed, he uses his Bolstered Fury</span>:<ul><li><span class='featureHeader'>The Unsettled Shards (+3). </span><span class='featureDescription'><i>20ft. </i><b><span class='blue'>+19</span>, <span ='red'>8d6+12</span></b> force(<b><span class='red'>+4d6</span></b> <span class='pink'>bonus damage on hexed creatures</span>)</span></li><li><span class='featureHeader'>Stomp. </span><span class='featureDescription'><i>5ft., one huge or smaller creature. </i><b><span class='blue'>+16</span>, <span class='red'>5d10+9</span></b> bludgeoning. The target must succeed on a DC22 Dex save or have the <b><span class='blue'>prone</span></b> condition. Until Azoriandas moves or uses Stomp again, the creature has the <b><span class='blue'>restrained</span></b> condition. The restrained creature or another creature within 5ft can use an action to make a DC22 Strength check, on a success they relocate to an unoccupied space within 5 feet of Azoriandas and end the restrained condition. </span></li></ul>"
    },
    {
        type: "action",
        header: "(A) Direbeam",
        description: "<i>(Recharge 5-6). 500ft., </i>10ft radius, DC22 dex/half <b><span class='red'>12d8</span></b> force, on failure <b><span class='blue'>stunned</span></b> until end of next turn. The shards of the diresword spin out of place and swirl around as a black cloud gathers at the base, drawing the pieces inward. As they unite in the center, a dark beam of purple energy ripples streaks out forming a laser that focuses for a second before sputtering out, leaving the shards to snap back into place amidst a cloud of sulphuric smelling smoke."
    },
    {
        type: "action",
        header: "(A) Shard Scatter",
        description: "<i>(Recharge 5-6). 120/350 6 targets </i><b><span class='blue'>+18</span>, <span class='red'>4d12+11</span></b> force, DC22 Con save or <span class='pink'>hexed</span> until end of Azoriandas’s next turn."
    }
];

var prof = 7;

var maxHealth = 600;
var AC = "18 (natural armour)";
var creatureName = "Azoriandas"





//calculated values
var abilityMod = [
    0, //STR
    0, //DEX
    0, //CON
    0, //WIS
    0, //INT
    0 //CHA
];
var saveMod = [
    0, //STR
    0, //DEX
    0, //CON
    0, //WIS
    0, //INT
    0 //CHA
];
var skill = [
    0, //Acrobatics
    0, //Animal Handling
    0, //Arcana
    0, //Athletics
    0, //Deception
    0, //History
    0, //Insight
    0, //Intimidation
    0, //Investigation
    0, //Medicine
    0, //Nature
    0, //Perception
    0, //Performance
    0, //Persuasion
    0, //Religion
    0, //Sleight of Hand
    0, //Stealth
    0, //Survival
];
function fetchJson() {
    fetch('/creature.json')
        .then(
            function (response) {
                return (response.json());
            })
        .then(function (data) {
            console.log(data);
            // var _data = jsonData.item[0];

            // Setting variables based on the JSON values
            abilityScore = data.abilityScore;
            saveProficiencies = data.saveProficiencies;
            damageResistance = data.damageResistance;
            damageImmunity = data.damageImmunity;
            damageVulnerability = data.damageVulnerability;
            additionalDamageResistance = data.additionalDamageResistance;
            additionalDamageImmunity = data.additionalDamageImmunity;
            additionalDamageVulnerability = data.additionalDamageVulnerability;
            additionalConditionImmunity = data.additionalConditionImmunity;
            skillProficiency = data.skillProficiency;
            skillExpertise = data.skillExpertise;
            sense = data.sense;
            creature = data.creature;
            alignment = data.alignment;
            size = data.size;
            speed = data.speed;
            languageKnown = data.languageKnown;
            savingThrowAbilities = data.savingThrowAbilities;
            prof = data.prof;
            maxHealth = data.maxHealth;
            AC = data.AC;
            creatureName = data.name;
            type = data.type;
            features = data.features;
            // cards[i].getElementsByClassName("cardHeader")[0].innerHTML =data.item[i].name;
            console.log(creatureName);
            reloadStatblock();

        });
}

window.addEventListener('load', function () {
    fetchJson();
    // reloadStatblock();
});

function reloadStatblock() {
    //this will update ability scores, mods, and saves
    calculateabilityMod();

    writeValue("type", sizeType[size] + " " + creatureType[creature] + ", " + alignmentType[alignment]);
    writeValue("AC");
    writeValue("prof");
    writeValue("creatureName");
    console.log(creatureName);

    //    writeValue("type");
    writeValue("maxHealth");
    writeValue("savingThrows", savingThrowAbilities)
    calculateSkills();
    calculateSense();
    calculateFeatureList("Resistance", "damage");
    calculateFeatureList("Vulnerability", "damage");
    calculateFeatureList("Immunity", "damage");
    calculateFeatureList("Immunity", "condition");
    calculateFeatureList("Known", "language");
    calculateSpeed();
    writeFeatures();
}

function writeFeatures(){
    
    var traitDiv = document.getElementById("trait");
    var bonusActionDiv = document.getElementById("bonusAction");
    var reactionDiv = document.getElementById("reaction");
    var actionDiv = document.getElementById("action");
    traitDiv.innerHTML = "";
    bonusActionDiv.innerHTML = "";
    reactionDiv.innerHTML = "";
    actionDiv.innerHTML = "";

    hideUnusedSections("trait");
    hideUnusedSections("bonusAction");
    hideUnusedSections("reaction");
    hideUnusedSections("action");
    hideUnusedSections("legendary");

    features.forEach(function (item) {
        createFeatureBlock(item.type, item.header, item.description)
    });
}

function hideUnusedSections(section){
    var isUsed = false;
    features.forEach(function (item) {
        isUsed = item.type == section && isUsed != true?true:isUsed;
    });
    if(!isUsed){
        document.getElementById(section).hidden = true;
        document.getElementById(section+"Title").hidden = true;
    }else{
        document.getElementById(section).hidden = false;
        document.getElementById(section+"Title").hidden = false;   
    }
}

function createFeatureBlock(type, header, description) {
    var parentDiv = document.getElementById(type);

    var featureDiv = document.createElement("div");
    featureDiv.classList.add("featureBlock");

    var headerSpan = document.createElement("span");
    headerSpan.classList.add("featureHeader");
    headerSpan.innerHTML = header + " ";

    var descriptionSpan = document.createElement("span");
    descriptionSpan.classList.add("featureDescription");
    descriptionSpan.innerHTML = description;

    featureDiv.appendChild(headerSpan);
    featureDiv.appendChild(descriptionSpan);
    parentDiv.appendChild(featureDiv);
    console.log("test");
}

function calculateabilityMod() {
    abilityScore.forEach(function (item, index) {
        //calculate modifier from score
        abilityMod[index] = Math.floor((item - 10) / 2);
    });
    //whenever the ability mods are calculated, recalculate anything they effect
    calculateSaveMods();

    //update the statblock with the new numbers
    writeModifiers();

}

function calculateSpeed() {
    var speedText = speed[0] + "ft.";
    speedType.forEach(function (item, index) {
        //        console.log(speed);

        if (speed[index] > 0 && index != 0) {
            speedText += ", " + item + " " + speed[index] + "ft.";
        }
    });
    console.log(speedText);
    writeValue("speed", speedText);

}

function calculateSaveMods() {
    abilityMod.forEach(function (item, index) {
        //check if proficiency should be added to save bonus
        var bonus = saveProficiencies[index] ? prof : 0;
        saveMod[index] = item + bonus;
    });

    //update the statblock with the new numbers
    writeModifiers();
}

function writeModifiers() {
    ability.forEach(function (item, index) {
        document.getElementById(item + "block").querySelector(".abilityScore").innerHTML = abilityScore[index];
        document.getElementById(item + "block").querySelector(".abilityMod").innerHTML = abilityMod[index];
        document.getElementById(item + "block").querySelector(".abilitySave").innerHTML = saveMod[index];
    });
}

function calculateSkills() {
    var skillText = "";
    skillList.forEach(function (item, index) {
        //find proficiency bonus
        var profBonus = skillProficiency[index] ? abilityMod[skillAbility[index]] + prof : "";

        //find expertise bonus
        var expertBonus = skillExpertise[index] ? abilityMod[skillAbility[index]] + (prof * 2) : "";
        //only add skill to list if there is a bonus
        if (expertBonus) {
            skillText = skillText ? skillText + ", " + item + " +" + expertBonus : skillText + item + " +" + expertBonus;
            skill[index] = expertBonus;
        } else if (profBonus) {
            skillText = skillText ? skillText + ", " + item + " +" + profBonus : skillText + item + " +" + profBonus;
            skill[index] = profBonus;
        } else {
            skill[index] = abilityMod[skillAbility[index]];
        }
    });
    writeValue("skills", skillText);
}

function calculateSense() {
    var senseText = "";
    senseType.forEach(function (item, index) {
        var currentSense = sense[index] != 0 ? item + " " + sense[index] + "ft." : "";

        senseText = senseText !== "" && currentSense !== "" ? senseText + ", " + currentSense : senseText + currentSense;
    });
    //perception index = 11
    var passive = skill[11] + 10;
    senseText = senseText ? senseText + ", passive Perception " + passive : "passive Perception " + passive;
    writeValue("senses", senseText);

}

function calculateFeatureList(element, type) {
    var listText = "";
    window[type + "Type"].forEach(function (item, index) {
        var currentItem = window[type + element][index] ? item : "";
        listText = listText && currentItem ? listText + ", " + currentItem : listText + currentItem;
    });
    var typeCap = type.charAt(0).toUpperCase() + type.slice(1);

    if (window["additional" + typeCap + element] != null) {
        window["additional" + typeCap + element].forEach(function (item, index) {
            listText = listText ? listText + ", " + item : listText + item;
        });
    }
    if (listText) {
        document.getElementById(type + element).parentElement.hidden = false;
    } else {
        document.getElementById(type + element).parentElement.hidden = true;
    }
    document.getElementById(type + element).innerHTML = listText;


}

function writeValue(element, value) {
    var isValueUsed = !value ? false : true;


    if (Array.isArray(value)) {
        var newVal = "";
        console.log(value.length);
        value.forEach(function (item) {
            newVal += item + ", ";
        });
        value = newVal.substring(0, newVal.length - 2);
        console.log(!value ? true : false);
        console.log(value);
    }
    var parent = document.getElementById(element).parentElement;


    if (!isValueUsed) {
        parent.hidden = window[element] ? false : true;
        document.getElementById(element).innerHTML = window[element];


    } else {
        parent.hidden = value ? false : true;
        document.getElementById(element).innerHTML = value;
    }
}
