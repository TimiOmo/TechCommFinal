const students = [
    { id: 1, gender: 'female', label: 'High Quality', desc: 'Meets intake, regular meals.', breakfast: 'Oatmeal & Fruit', lunch: 'Salad & Protein', snack: 'Nuts', dinner: 'Balanced', score: 95 },
    { id: 2, gender: 'female', label: 'Adequate', desc: 'Mixed-quality, not optimal.', breakfast: 'Bagel', lunch: 'Sandwich', snack: 'Chips', dinner: 'Pasta', score: 70 },
    { id: 3, gender: 'male', label: 'The Skipper', desc: 'Skips breakfast entirely.', breakfast: 'None / Coffee', lunch: 'Pizza', snack: 'Energy Drink', dinner: 'Late meal', score: 45 },
    { id: 4, gender: 'female', label: 'Snack-Heavy', desc: 'Lower-quality, grazes.', breakfast: 'Pop-Tart', lunch: 'Vending Machine', snack: 'Candy', dinner: 'Fast Food', score: 50 },
    { id: 5, gender: 'female', label: 'Plant-Forward', desc: 'Meets veggie/fruit targets.', breakfast: 'Smoothie', lunch: 'Veggie Wrap', snack: 'Carrots/Hummus', dinner: 'Tofu Stir-fry', score: 90 },
    { id: 6, gender: 'male', label: 'Irregular Eater', desc: 'Consumes fewer meals overall.', breakfast: 'None', lunch: 'Burger', snack: 'None', dinner: 'Large Pizza meal', score: 55 },
    { id: 7, gender: 'female', label: 'High Refined Grain', desc: 'Pasta/bread heavy diet.', breakfast: 'Cereal', lunch: 'Mac & Cheese', snack: 'Pretzels', dinner: 'Spaghetti', score: 60 },
    { id: 8, gender: 'female', label: 'Low Fruit', desc: 'Balanced but lacking fruit.', breakfast: 'Eggs & Toast', lunch: 'Chicken & Rice', snack: 'Cheese', dinner: 'Steak & Veggies', score: 75 },
    { id: 9, gender: 'male', label: 'Fish & Dairy', desc: 'Regularly consumes fish/dairy.', breakfast: 'Yogurt', lunch: 'Tuna Salad', snack: 'Cheese Stick', dinner: 'Salmon', score: 85 },
    { id: 10, gender: 'female', label: 'Lowest Intake', desc: 'Low food intake, skipping.', breakfast: 'None', lunch: 'Half a sandwich', snack: 'None', dinner: 'Small soup', score: 30 }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('avatar-grid');
    const steps = document.querySelectorAll('.step');

    // 1. Render Avatars
    students.forEach(student => {
        const div = document.createElement('div');
        div.className = `avatar ${student.gender}`;
        div.dataset.id = student.id;
        
        // Placeholder icons for Male/Female
        const icon = student.gender === 'male' ? '👨' : '👩';
        
        div.innerHTML = `
            <div class="avatar-icon">${icon}</div>
            <div class="avatar-label">${student.label}</div>
            
            <!-- Graph Section -->
            <div class="nutrition-graph">
                <div class="graph-label">USDA Target Match</div>
                <div class="bar-bg">
                    <div class="bar-fill" style="width: ${student.score}%" title="${student.score}% Match"></div>
                </div>
            </div>

            <div class="avatar-tooltip">
                <strong>Profile:</strong> ${student.desc} <br/><br/>
                <span class="meal-data">Hover during scroll to see meal data.</span>
            </div>
        `;
        
        // Hover interaction for the tooltip box
        div.addEventListener('mouseenter', () => div.classList.add('active-tooltip'));
        div.addEventListener('mouseleave', () => div.classList.remove('active-tooltip'));
        
        grid.appendChild(div);
    });

    // 2. Scrollytelling using IntersectionObserver
    const handleStepEnter = (step) => {
        // Activate current step
        steps.forEach(s => s.classList.remove('is-active'));
        step.classList.add('is-active');

        const currentStepData = step.dataset.step;

        // Update visual states based on scroll position
        const avatars = document.querySelectorAll('.avatar');
        
        if (currentStepData === 'intro' || currentStepData === 'conclusion') {
            avatars.forEach(av => {
                av.style.borderColor = 'transparent';
                av.querySelector('.meal-data').textContent = 'Profile: ' + students[av.dataset.id - 1].desc;
            });
        } else {
            // Meals: breakfast, lunch, snack, dinner
            const stepMealName = currentStepData.charAt(0).toUpperCase() + currentStepData.slice(1);

            // Update each student's tooltip dynamically for the specific meal
            avatars.forEach(av => {
                const sData = students[av.dataset.id - 1];
                av.style.borderColor = '#ff5722'; // Highlight grid during meals
                av.querySelector('.meal-data').innerHTML = `<strong>${stepMealName}:</strong> ${sData[currentStepData]}`;
            });
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                handleStepEnter(entry.target);
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px' // Trigger when the step is in the middle of the screen
    });

    steps.forEach(step => observer.observe(step));
});