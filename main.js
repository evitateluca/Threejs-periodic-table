const table = [
    "H", "Idrogeno", "1.00794", 1, 1,
    "He", "Elio", "4.002602", 18, 1,
    "Li", "Litio", "6.941", 1, 2,
    "Be", "Berillio", "9.012182", 2, 2,
    "B", "Boro", "10.811", 13, 2,
    "C", "Carbonio", "12.0107", 14, 2,
    "N", "Azoto", "14.0067", 15, 2,
    "O", "Ossigeno", "15.9994", 16, 2,
    "F", "Fluoro", "18.9984032", 17, 2,
    "Ne", "Neon", "20.1797", 18, 2,
    "Na", "Sodio", "22.98976...", 1, 3,
    "Mg", "Magnesio", "24.305", 2, 3,
    "Al", "Aluminio", "26.9815386", 13, 3,
    "Si", "Silicio", "28.0855", 14, 3,
    "P", "Fosforo", "30.973762", 15, 3,
    "S", "Zolfo", "32.065", 16, 3,
    "Cl", "Cloro", "35.453", 17, 3,
    "Ar", "Argon", "39.948", 18, 3,
    "K", "Potassio", "39.948", 1, 4,
    "Ca", "Calcio", "40.078", 2, 4,
    "Sc", "Scandio", "44.955912", 3, 4,
    "Ti", "Titanio", "47.867", 4, 4,
    "V", "Vanadio", "50.9415", 5, 4,
    "Cr", "Cromo", "51.9961", 6, 4,
    "Mn", "Manganese", "54.938045", 7, 4,
    "Fe", "Ferro", "55.845", 8, 4,
    "Co", "Cobalto", "58.933195", 9, 4,
    "Ni", "Nichel", "58.6934", 10, 4,
    "Cu", "Rame", "63.546", 11, 4,
    "Zn", "Zinco", "65.38", 12, 4,
    "Ga", "Gallio", "69.723", 13, 4,
    "Ge", "Germanio", "72.63", 14, 4,
    "As", "Arsenico", "74.9216", 15, 4,
    "Se", "Selenio", "78.96", 16, 4,
    "Br", "Bromo", "79.904", 17, 4,
    "Kr", "Cripton", "83.798", 18, 4,
    "Rb", "Rubidio", "85.4678", 1, 5,
    "Sr", "Stronzio", "87.62", 2, 5,
    "Y", "Ittrio", "88.90585", 3, 5,
    "Zr", "Zirconio", "91.224", 4, 5,
    "Nb", "Niobio", "92.90628", 5, 5,
    "Mo", "Molibdeno", "95.96", 6, 5,
    "Tc", "Tecnezio", "(98)", 7, 5,
    "Ru", "Rutenio", "101.07", 8, 5,
    "Rh", "Rodio", "102.9055", 9, 5,
    "Pd", "Palladio", "106.42", 10, 5,
    "Ag", "Argento", "107.8682", 11, 5,
    "Cd", "Cadmio", "112.411", 12, 5,
    "In", "Indo", "114.818", 13, 5,
    "Sn", "Stagno", "118.71", 14, 5,
    "Sb", "Antimonio", "121.76", 15, 5,
    "Te", "Tellurio", "127.6", 16, 5,
    "I", "Iodio", "126.90447", 17, 5,
    "Xe", "Xenon", "131.293", 18, 5,
    "Cs", "Cesio", "132.9054", 1, 6,
    "Ba", "Bario", "132.9054", 2, 6,
    "La", "Lantanio", "138.90547", 4, 9,
    "Ce", "Cerio", "140.116", 5, 9,
    "Pr", "Praseodimio", "140.90765", 6, 9,
    "Nd", "Neodimio", "144.242", 7, 9,
    "Pm", "Promezio", "(145)", 8, 9,
    "Sm", "Samario", "150.36", 9, 9,
    "Eu", "Europio", "151.964", 10, 9,
    "Gd", "Gadolinio", "157.25", 11, 9,
    "Tb", "Terbio", "158.92535", 12, 9,
    "Dy", "Disprosio", "162.5", 13, 9,
    "Ho", "Olmio", "164.93032", 14, 9,
    "Er", "Erbio", "167.259", 15, 9,
    "Tm", "Tulio", "168.93421", 16, 9,
    "Yb", "Ytterbio", "173.054", 17, 9,
    "Lu", "Lutezio", "174.9668", 18, 9,
    "Hf", "Afnio", "178.49", 4, 6,
    "Ta", "Tantalo", "180.94788", 5, 6,
    "W", "Tungsteno", "183.84", 6, 6,
    "Re", "Renio", "186.207", 7, 6,
    "Os", "Osmio", "190.23", 8, 6,
    "Ir", "Iridio", "192.217", 9, 6,
    "Pt", "Platino", "195.084", 10, 6,
    "Au", "Oro", "196.966569", 11, 6,
    "Hg", "Mercurio", "200.59", 12, 6,
    "Tl", "Tallio", "204.3833", 13, 6,
    "Pb", "Piombo", "207.2", 14, 6,
    "Bi", "Bismuto", "208.9804", 15, 6,
    "Po", "Polonio", "(209)", 16, 6,
    "At", "Astato", "(210)", 17, 6,
    "Rn", "Radon", "(222)", 18, 6,
    "Fr", "Francio", "(223)", 1, 7,
    "Ra", "Radio", "(226)", 2, 7,
    "Ac", "Attinio", "(227)", 4, 10,
    "Th", "Torio", "232.03806", 5, 10,
    "Pa", "Proattinio", "231.0588", 6, 10,
    "U", "Uranio", "238.02891", 7, 10,
    "Np", "Neptunio", "(237)", 8, 10,
    "Pu", "Plutonio", "(244)", 9, 10,
    "Am", "Americio", "(243)", 10, 10,
    "Cm", "Curio", "(247)", 11, 10,
    "Bk", "Berchelio", "(247)", 12, 10,
    "Cf", "Californio", "(251)", 13, 10,
    "Es", "Einstenio", "(252)", 14, 10,
    "Fm", "Fermio", "(257)", 15, 10,
    "Md", "Mendelevio", "(258)", 16, 10,
    "No", "Nobelio", "(259)", 17, 10,
    "Lr", "Laurencio", "(262)", 18, 10,
    "Rf", "Ruterfordio", "(267)", 4, 7,
    "Db", "Dubnio", "(268)", 5, 7,
    "Sg", "Seaborgio", "(271)", 6, 7,
    "Bh", "Borio", "(272)", 7, 7,
    "Hs", "Hassio", "(270)", 8, 7,
    "Mt", "Meitnerio", "(276)", 9, 7,
    "Ds", "Darmstadio", "(281)", 10, 7,
    "Rg", "Roentgenio", "(280)", 11, 7,
    "Cn", "Copernicium", "(285)", 12, 7,
    "Nh", "Nihonium", "(286)", 13, 7,
    "Fl", "Flerovium", "(289)", 14, 7,
    "Mc", "Moscovium", "(290)", 15, 7,
    "Lv", "Livermorium", "(293)", 16, 7,
    "Ts", "Tennessine", "(294)", 17, 7,
    "Og", "Oganesson", "(294)", 18, 7
];


let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
