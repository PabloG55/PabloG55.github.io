function resetForm() {
    document.getElementById('intro-form').reset();
    document.getElementById('output-container').innerHTML = '';
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('output-container').style.display = 'none';
}

function validateForm() {
    const requiredFields = [
        'name', 'mascot', 'image', 'caption', 'personal-background',
        'professional-background', 'academic-background', 'web-development-background',
        'platform', 'agreement'
    ];
    
    for (let fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value) {
            alert(`Please fill out the ${fieldId.replace(/-/g, ' ')} field.`);
            return false;
        }
    }
    const imageField = document.getElementById('image');
    if (!['image/png', 'image/jpeg'].includes(imageField.files[0].type)) {
        alert('Image must be a PNG or JPG.');
        return false;
    }
    return true;
}

function addCourse() {
    const courseContainer = document.getElementById('course-container');
    const courseWrapper = document.createElement('div');
    const courseInput = document.createElement('input');
    const courseDescriptionInput = document.createElement('input');
    const deleteButton = document.createElement('button');

    courseInput.type = 'text';
    courseInput.name = 'courses[]';
    courseInput.placeholder = 'Course title';

    courseDescriptionInput.type = 'text';
    courseDescriptionInput.name = 'descriptions[]';
    courseDescriptionInput.placeholder = 'Course Description';

    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.addEventListener('click', () => courseContainer.removeChild(courseWrapper));

    courseWrapper.appendChild(courseInput);
    courseWrapper.appendChild(courseDescriptionInput);
    courseWrapper.appendChild(deleteButton);
    courseContainer.appendChild(courseWrapper);
}

function displayData() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const caption = document.getElementById('caption').value;
    const personalBackground = document.getElementById('personal-background').value;
    const professionalBackground = document.getElementById('professional-background').value;
    const academicBackground = document.getElementById('academic-background').value;
    const webDevelopmentBackground = document.getElementById('web-development-background').value;
    const platform = document.getElementById('platform').value;
    const funnyThing = document.getElementById('funny-thing').value;
    const anythingElse = document.getElementById('anything-else').value;

    const courses = Array.from(document.getElementsByName('courses[]')).map((course) => course.value).filter((course) => course);
    const descriptions = Array.from(document.getElementsByName('descriptions[]')).map((description) => description.value).filter((description) => description);

    const imageField = document.getElementById('image');
    const file = imageField.files[0];
    const outputContainer = document.getElementById('output-container');

    outputContainer.innerHTML = '';

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.alt = 'User selected image';

            outputContainer.innerHTML = `
                <h2>Introduction</h2>
                <h3>${name} | ${mascot}</h3>
                ${imgElement.outerHTML} 
                <p><i>${caption}</i></p>
                <ul>
                    <li><strong>Personal Background:</strong> ${personalBackground}</li>
                    <li><strong>Professional Background:</strong> ${professionalBackground}</li>
                    <li><strong>Academic Background:</strong> ${academicBackground}</li>
                    <li><strong>Background in this Subject:</strong> ${webDevelopmentBackground}</li>
                    <li><strong>Primary Computer Platform:</strong> ${platform}</li>
                    <li><strong>Courses I'm Taking & Why:</strong>
                        <ul>
                            ${courses.map((course, index) => `<li><strong>${course}:</strong> ${descriptions[index] || 'No description'}</li>`).join('')}
                        </ul>
                    </li>
                    <li><strong>Funny/Interesting Item to Remember Me By:</strong> ${funnyThing}</li>
                    <li><strong>I'd also like to Share:</strong> ${anythingElse}</li>
                </ul>
                <button type="button" onclick="resetForm()">Reset Form</button> 
            `;
        };
        reader.readAsDataURL(file);
    }
}



document.getElementById('intro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        displayData();
        document.getElementById('form-section').style.display = 'none';
        document.getElementById('output-container').style.display = 'block';
    }
});

document.getElementById('add-course-btn').addEventListener('click', addCourse);
