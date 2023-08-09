/*  
    1) create two class FrontEnd and BackEnd which are based on WebDev class, both have some common properties and one same method printLanguage(which will print used langguage like FrontEnd -> javscript, BackEnd -> .NET) and some additional different  function     needMODIFY 
 */

class WebDev {
    // common property 'languages'
    languages = [];

    // common method 'printLanguage'
    printLanguage() {
        console.log('Language : ', this.languages.join(','));
    }
}

// class 'FrontEnd' based on class 'WebDev'
class FrontEnd extends WebDev {
    // uncommon property 'fronEndFrameworks'
    frontEndFrameworks = [];

    constructor(langs, frameworks) {
        super();
        this.languages = langs;
        this.frontEndFrameworks = frameworks;
        this.printLanguage();
        this.aboutFrontEnd();
    }

    // uncommon method 'aboutFrontEnd'
    aboutFrontEnd() {
        console.log(
            'Front-end development focuses on the visual aspects of a website — the part that users see and interact with. \n\nFrontend Frameworks : ',
            this.frontEndFrameworks.join(',')
        );
    }
}

// class 'BackEnd' based on class 'WebDev'
class BackEnd extends WebDev {
    // uncommon property 'BackEndFrameworks'
    backEndFrameworks = [];

    constructor(langs, frameworks) {
        super();
        this.languages = langs;
        this.backEndFrameworks = frameworks;
        this.printLanguage();
        this.aboutBackEnd();
    }

    // uncommon method 'aboutBackEnd'
    aboutBackEnd() {
        console.log(
            "Back-end development comprises a site's structure, system, data, and logic. \n\nBackend Frameworks : ",
            this.backEndFrameworks.join(',')
        );
    }
}

const fe = new FrontEnd(
    ['JavaScript', 'HTML', 'CSS'],
    ['jQuery', 'AngularJS', 'SASS', 'Bootstrap', 'EmberJS']
);
const be = new BackEnd(
    ['Python', 'Java', 'Ruby', 'PHP'],
    ['Django', 'Laravel', 'Spring', 'Zend', 'Symfony', 'CakePHP']
);
