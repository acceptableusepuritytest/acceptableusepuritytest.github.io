const test = document.getElementById('test'),
      list = document.getElementById('list'),
      results = document.getElementById('results'),
      submit = document.getElementById('submit'),
      reset = document.getElementById('reset'),
      restart = document.getElementById('restart');

const questions = [
    'Had your laptop reimaged',
    'Used a pseudonym or been anonymous online',
    'Disclosed the name of your school or any other identifying information online',
    'Brought your charger to school',
    'Loaned your charger to another student',
    'Loaned your laptop to another student',
    'Used another student’s laptop',
    'Used a proxy to circumvent web filtering',
    'Circumvented laptop security measures other than web filtering',
    'Used an application that is blocked by FCCPS security',
    'Logged into an FCCPS system as someone else',
    'Used or connected to another student’s account or laptop without permission',
    'Accessed administrator privileges on your laptop',
    'Violated laptop virus protection procedures such as antivirus software',
    'Found a security problem in FCCPS electronic media',
    'Found a security problem in FCCPS electronic media without notifying an administrator',
    'Demonstrated a security problem to other students',
    'Installed software without asking permission',
    'Installed any free software without authorization from the ITC',
    'Acted without consideration for limited resources (storage space, bandwidth, printing capacity)',
    'Obtained a school WiFi password you weren’t allowed to have',
    'Distributed a school WiFi password to other students',
    'Used the internet to download or share copyrighted material without permission',
    'Downloaded pirated media',
    'Used FCCPS electronic media to view, sell or purchase merchandise for personal use',
    'Used FCCPS electronic media for commercial or private financial purposes',
    'Used FCCPS electronic media for any illegal activity',
    'Used FCCPS electronic media while access privileges were suspended or revoked',
    'Connected your phone or another private device to an FCCPS WiFi network',
    'Connected a device other not owned by FCCPS to FCCPS hardware',
    'Permanently disabled FCCPS security software on your computer',
    'Uploaded a worm, virus, or other harmful software to FCCPS electronic media',
    'Created a worm, virus, or other harmful software with or for FCCPS electronic media',
    'Used the Internet to “hack” or gain unauthorized access to laptops, networks, or information systems',
    'Caused a disruption to the FCCPS network',
    'Damaged your charger',
    'Damaged your laptop hardware',
    'Damaged your laptop’s operating system to the point of needing reimaging',
    'Sexted',
    'Sexted using FCCPS electronic media',
    'Copied, downloaded or uploaded another person’s personally identifiable information, such as photos, without permission',
    'Had your laptop reimaged due to abuse of FCCPS electronic media',
    'Had your laptop reimaged twice in one week',
    'Had your laptop confiscated long-term due to abuse of FCCPS electronic media',
    'Created content, such as a website, that was later blocked by FCCPS filtering',
    'Received a warning or talking-to from administrators regarding abuse of FCCPS electronic media',
    'Received disciplinary action due to abuse of FCCPS electronic media',
    'Been suspended due to abuse of FCCPS electronic media',
    'Been expelled due to abuse of FCCPS electronic media',
    'Been legally prosecuted due to abuse of FCCPS electronic media',
];

for (question of questions) {
    let li = document.createElement('li');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let text = document.createTextNode(question + '?');
    input.classList.add('checkbox');
    input.type = 'checkbox';
    label.appendChild(input);
    label.appendChild(text);
    li.appendChild(label);
    list.appendChild(li);
}

submit.onclick = function() {
    console.log('Calculating score.');
    let checkboxes = list.getElementsByClassName('checkbox');
    let total = checkboxes.length;
    let points = total;
    for (checkbox of checkboxes) {
        if (checkbox.checked) points--;
    }
    score.textContent = (points * 2) + '/' + (total * 2);
    test.classList.remove('shown');
    results.classList.add('shown');
};

reset.onclick = restart.onclick = function() { location.reload(); };
