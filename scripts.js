const test = document.getElementById('test'),
      list = document.getElementById('list'),
      results = document.getElementById('results'),
      submit = document.getElementById('submit'),
      reset = document.getElementById('reset'),
      restart = document.getElementById('restart');

const questions = [
    'Loaned your laptop, charger, or cords to another student',
    'Brought your charger to school',
    'Used a proxy to circumvent web filtering',
    'Circumvented laptop security measures other than web filtering',
    'Used an application that is blocked by FCCPS security',
    'Had your laptop reimaged',
    'Entered an FCCPS system you weren’t authorized to',
    'Used or connected to another student’s account or laptop without permission',
    'Accessed administrator privileges on FCCPS electronic media',
    'Violated laptop virus protection procedures such as antivirus software',
    'Found a security problem in FCCPS electronic media',
    'Found a security problem in FCCPS electronic media WITHOUT notifying a teacher, ITC, or administrator',
    'Installed software without asking permission',
    'Installed any free software without authorization from the ITC',
    'Acted without consideration for limited resources (storage space, bandwidth, printing capacity)',
    'Used the internet to download or share copyrighted material without permission',
    'Used FCCPS electronic media to view, sell or purchase merchandise for personal use',
    'Used FCCPS electronic media for commercial or private financial purposes',
    'Used FCCPS electronic media for any illegal activity',
    'Used FCCPS electronic media while access privileges were suspended or revoked',
    'Connected your phone or another private device to an FCCPS WiFi network',
    'Connected a device not owned by FCCPS to FCCPS hardware',
    'Uploaded a worm, virus, or other harmful software to FCCPS electronic media',
    'Created a worm, virus, or other harmful software with FCCPS electronic media',
    'Used the Internet to “hack” or gain unauthorized access to laptops, networks, or information systems',
    'Caused a disruption to the FCCPS network',
    'Damaged your charger',
    'Damaged your laptop hardware',
    'Sexted',
    'Sexted using FCCPS electronic media',
    'Copied, downloaded or uploaded another person’s personally identifiable information, such as photos, without permission',
    'Received a warning or talking-to from administrators regarding abuse of FCCPS electronic media',
    'Had your laptop reimaged due to abuse of FCCPS electronic media',
    'Had your laptop reimaged twice in one week',
    'Had your laptop confiscated long-term due to abuse of FCCPS electronic media',
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
    score.textContent = points + '/' + total;
    test.classList.remove('shown');
    results.classList.add('shown');
};

reset.onclick = restart.onclick = function() { location.reload(); };
