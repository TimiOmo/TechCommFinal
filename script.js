const usdaTarget = { calories: 2000, protein: 50, fiber: 28, sugar: 50 };

const students = [
    { 
        id: 1, gender: 'female', label: 'High Quality', desc: 'Meets intake, regular meals.', 
        breakfast: 'Oatmeal & Fruit', lunch: 'Salad & Protein', snack: 'Nuts', dinner: 'Balanced Chicken & Veggies', 
        breakfast_cal: 350, breakfast_pro: 10, breakfast_fib: 8, breakfast_sug: 15,
        lunch_cal: 500, lunch_pro: 25, lunch_fib: 10, lunch_sug: 5,
        snack_cal: 200, snack_pro: 5, snack_fib: 3, snack_sug: 2,
        dinner_cal: 1000, dinner_pro: 25, dinner_fib: 9, dinner_sug: 13
    },
    { 
        id: 2, gender: 'female', label: 'Adequate', desc: 'Mixed-quality, not optimal.', 
        breakfast: 'Plain Bagel & Cream Cheese', lunch: 'Turkey Sandwich & Chips', snack: 'Granola Bar', dinner: 'Pasta & Meat Sauce', 
        breakfast_cal: 400, breakfast_pro: 10, breakfast_fib: 2, breakfast_sug: 5,
        lunch_cal: 600, lunch_pro: 20, lunch_fib: 5, lunch_sug: 5,
        snack_cal: 200, snack_pro: 3, snack_fib: 2, snack_sug: 15,
        dinner_cal: 1000, dinner_pro: 22, dinner_fib: 6, dinner_sug: 35
    },
    { 
        id: 3, gender: 'male', label: 'The Skipper', desc: 'Skips breakfast entirely.', 
        breakfast: 'Black Coffee', lunch: 'Pepperoni Pizza', snack: 'Energy Drink', dinner: 'Late Night Burgers', 
        breakfast_cal: 5, breakfast_pro: 0, breakfast_fib: 0, breakfast_sug: 0,
        lunch_cal: 700, lunch_pro: 25, lunch_fib: 4, lunch_sug: 10,
        snack_cal: 145, snack_pro: 0, snack_fib: 0, snack_sug: 55,
        dinner_cal: 1000, dinner_pro: 35, dinner_fib: 8, dinner_sug: 20
    },
    { 
        id: 4, gender: 'female', label: 'Snack-Heavy', desc: 'Lower-quality, grazes.', 
        breakfast: 'Pop-Tarts', lunch: 'Vending Machine Snacks', snack: 'Candy Bar', dinner: 'Fast Food Combo', 
        breakfast_cal: 400, breakfast_pro: 4, breakfast_fib: 1, breakfast_sug: 30,
        lunch_cal: 500, lunch_pro: 6, lunch_fib: 2, lunch_sug: 25,
        snack_cal: 300, snack_pro: 3, snack_fib: 1, snack_sug: 35,
        dinner_cal: 1300, dinner_pro: 27, dinner_fib: 6, dinner_sug: 20
    },
    { 
        id: 5, gender: 'female', label: 'Plant-Forward', desc: 'Meets veggie/fruit targets.', 
        breakfast: 'Green Smoothie', lunch: 'Veggie Wrap', snack: 'Carrots & Hummus', dinner: 'Tofu Stir-fry', 
        breakfast_cal: 300, breakfast_pro: 5, breakfast_fib: 8, breakfast_sug: 20,
        lunch_cal: 500, lunch_pro: 15, lunch_fib: 12, lunch_sug: 5,
        snack_cal: 200, snack_pro: 5, snack_fib: 6, snack_sug: 5,
        dinner_cal: 900, dinner_pro: 30, dinner_fib: 9, dinner_sug: 10
    },
    { 
        id: 6, gender: 'male', label: 'Irregular Eater', desc: 'Consumes fewer meals overall.', 
        breakfast: 'None', lunch: 'Double Cheeseburger', snack: 'None', dinner: 'Large Sausage Pizza', 
        breakfast_cal: 0, breakfast_pro: 0, breakfast_fib: 0, breakfast_sug: 0,
        lunch_cal: 700, lunch_pro: 40, lunch_fib: 2, lunch_sug: 10,
        snack_cal: 0, snack_pro: 0, snack_fib: 0, snack_sug: 0,
        dinner_cal: 1000, dinner_pro: 35, dinner_fib: 6, dinner_sug: 35
    },
    { 
        id: 7, gender: 'female', label: 'High Refined Grain', desc: 'Pasta/bread heavy diet.', 
        breakfast: 'Sugary Cereal', lunch: 'Mac & Cheese', snack: 'Pretzels', dinner: 'Spaghetti & Garlic Bread', 
        breakfast_cal: 350, breakfast_pro: 4, breakfast_fib: 2, breakfast_sug: 25,
        lunch_cal: 600, lunch_pro: 15, lunch_fib: 3, lunch_sug: 10,
        snack_cal: 200, snack_pro: 4, snack_fib: 1, snack_sug: 0,
        dinner_cal: 1200, dinner_pro: 22, dinner_fib: 8, dinner_sug: 30
    },
    { 
        id: 8, gender: 'male', label: 'Low Fruit', desc: 'Balanced but lacking fruit.', 
        breakfast: 'Eggs & White Toast', lunch: 'Chicken & White Rice', snack: 'Cheese Cubes', dinner: 'Steak & Roasted Potatoes', 
        breakfast_cal: 400, breakfast_pro: 20, breakfast_fib: 2, breakfast_sug: 5,
        lunch_cal: 600, lunch_pro: 35, lunch_fib: 3, lunch_sug: 5,
        snack_cal: 150, snack_pro: 10, snack_fib: 0, snack_sug: 0,
        dinner_cal: 1000, dinner_pro: 25, dinner_fib: 7, dinner_sug: 15
    },
    { 
        id: 9, gender: 'female', label: 'Fish & Dairy', desc: 'Regularly consumes fish/dairy.', 
        breakfast: 'Greek Yogurt & Honey', lunch: 'Tuna Salad on Wheat', snack: 'Cheese Stick', dinner: 'Baked Salmon & Asparagus', 
        breakfast_cal: 250, breakfast_pro: 15, breakfast_fib: 0, breakfast_sug: 20,
        lunch_cal: 500, lunch_pro: 30, lunch_fib: 8, lunch_sug: 5,
        snack_cal: 100, snack_pro: 8, snack_fib: 0, snack_sug: 0,
        dinner_cal: 1100, dinner_pro: 32, dinner_fib: 14, dinner_sug: 10
    },
    { 
        id: 10, gender: 'female', label: 'Lowest Intake', desc: 'Low food intake, skipping.', 
        breakfast: 'None', lunch: 'Half a Turkey Sandwich', snack: 'None', dinner: 'Small Bowl of Soup', 
        breakfast_cal: 0, breakfast_pro: 0, breakfast_fib: 0, breakfast_sug: 0,
        lunch_cal: 350, lunch_pro: 15, lunch_fib: 3, lunch_sug: 5,
        snack_cal: 0, snack_pro: 0, snack_fib: 0, snack_sug: 0,
        dinner_cal: 600, dinner_pro: 20, dinner_fib: 5, dinner_sug: 10
    }
];

const avatarsImgs = {
    male: 'images/male_idle.gif',
    female: 'images/female_idle.gif'
};

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('avatar-grid');
    const steps = document.querySelectorAll('.step');
    const mealOrder = ['breakfast', 'lunch', 'snack', 'dinner'];

    // 1. Render Avatars
    students.forEach(student => {
        const div = document.createElement('div');
        div.className = `avatar ${student.gender}`;
        div.dataset.id = student.id;
        const avatar = avatarsImgs[student.gender];
        
        // Start all bars at 0%
        div.innerHTML = `
        <div class="avatar-icon">
            <img src="${avatar}" alt="${student.label}" />
        </div>
        <div class="avatar-label">${student.label}</div>
            
            <!-- Graph Section -->
            <div class="nutrition-graph">
                <div class="graph-row">
                    <div class="graph-label">Cal</div>
                    <div class="bar-bg"><div class="bar-fill cal-fill" style="width: 0%" title="0 kcal"></div></div>
                </div>
                <div class="graph-row">
                    <div class="graph-label">Pro</div>
                    <div class="bar-bg"><div class="bar-fill pro-fill" style="width: 0%" title="0 g"></div></div>
                </div>
                <div class="graph-row">
                    <div class="graph-label">Fib</div>
                    <div class="bar-bg"><div class="bar-fill fib-fill" style="width: 0%" title="0 g"></div></div>
                </div>
                <div class="graph-row">
                    <div class="graph-label">Sug</div>
                    <div class="bar-bg"><div class="bar-fill sug-fill" style="width: 0%; background: var(--accent-color);" title="0 g"></div></div>
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
        const avatars = document.querySelectorAll('.avatar');

        // Determine which meals to total based on current scroll depth
        let activeMeals = [];
        if (currentStepData === 'conclusion' || currentStepData === 'outro') {
            activeMeals = mealOrder; // include all
        } else if (mealOrder.includes(currentStepData)) {
            const idx = mealOrder.indexOf(currentStepData);
            activeMeals = mealOrder.slice(0, idx + 1); // e.g. up to 'lunch'
        }
        
        // Update visual states based on scroll position
        avatars.forEach(av => {
            const sData = students[av.dataset.id - 1];
            
            // Sum up cumulative values dynamically
            let curCal = 0, curPro = 0, curFib = 0, curSug = 0;
            activeMeals.forEach(m => {
                curCal += sData[`${m}_cal`];
                curPro += sData[`${m}_pro`];
                curFib += sData[`${m}_fib`];
                curSug += sData[`${m}_sug`];
            });

            // Calculate fill percentages
            const calFill = Math.min((curCal / usdaTarget.calories) * 100, 100);
            const proFill = Math.min((curPro / usdaTarget.protein) * 100, 100);
            const fibFill = Math.min((curFib / usdaTarget.fiber) * 100, 100);
            const sugPercent = (curSug / usdaTarget.sugar) * 100;
            const sugFill = Math.min(sugPercent, 100);
            const sugColor = sugPercent > 100 ? '#ff3232' : 'var(--accent-color)';

            // Update DOM elements for the graph bars
            av.querySelector('.cal-fill').style.width = `${calFill}%`;
            av.querySelector('.cal-fill').title = `${curCal} kcal`;
            av.querySelector('.pro-fill').style.width = `${proFill}%`;
            av.querySelector('.pro-fill').title = `${curPro} g`;
            av.querySelector('.fib-fill').style.width = `${fibFill}%`;
            av.querySelector('.fib-fill').title = `${curFib} g`;
            const sugBar = av.querySelector('.sug-fill');
            sugBar.style.width = `${sugFill}%`;
            sugBar.style.background = sugColor;
            sugBar.title = `${curSug} g`;

            if (currentStepData === 'intro') {
                av.style.borderColor = 'transparent';
                av.querySelector('.meal-data').textContent = 'Profile: ' + sData.desc;
            } else if (currentStepData === 'conclusion' || currentStepData === 'outro') {
                av.style.borderColor = '#4CAF50'; // Green highlight for final summary
                av.querySelector('.meal-data').innerHTML = `<strong>Total Daily Intake:</strong><br/>Cal: ${curCal} | Pro: ${curPro}g<br/>Fib: ${curFib}g | Sug: ${curSug}g`;
            } else {
                // Meals: breakfast, lunch, snack, dinner
                const stepMealName = currentStepData.charAt(0).toUpperCase() + currentStepData.slice(1);
                av.style.borderColor = '#ff5722'; // Highlight grid during meals
                av.querySelector('.meal-data').innerHTML = `<strong>${stepMealName}:</strong> ${sData[currentStepData]}`;
            }
        });
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

    // 3. Build Final Summary Chart
    const summaryChart = document.getElementById('final-summary-chart');
    if (summaryChart) {
        let avgCal = 0, avgPro = 0, avgFib = 0, avgSug = 0;
        
        students.forEach(s => {
            mealOrder.forEach(m => {
                avgCal += s[`${m}_cal`];
                avgPro += s[`${m}_pro`];
                avgFib += s[`${m}_fib`];
                avgSug += s[`${m}_sug`];
            });
        });

        avgCal /= students.length;
        avgPro /= students.length;
        avgFib /= students.length;
        avgSug /= students.length;

        const pCal = (avgCal / usdaTarget.calories) * 100;
        const pPro = (avgPro / usdaTarget.protein) * 100;
        const pFib = (avgFib / usdaTarget.fiber) * 100;
        const pSug = (avgSug / usdaTarget.sugar) * 100;

        summaryChart.innerHTML = `
            <div class="summary-stat">
                <div class="stat-name">Average Daily Calories (${Math.round(avgCal)} / ${usdaTarget.calories}) 
                    <span style="float:right">${Math.round(pCal)}%</span>
                </div>
                <div class="stat-bar"><div class="stat-fill" style="width: ${Math.min(pCal, 100)}%;"></div></div>
            </div>
            <div class="summary-stat">
                <div class="stat-name">Average Daily Protein (${Math.round(avgPro)}g / ${usdaTarget.protein}g)
                    <span style="float:right">${Math.round(pPro)}%</span>
                </div>
                <div class="stat-bar"><div class="stat-fill" style="width: ${Math.min(pPro, 100)}%;"></div></div>
            </div>
            <div class="summary-stat">
                <div class="stat-name">Average Daily Fiber (${Math.round(avgFib)}g / ${usdaTarget.fiber}g)
                    <span style="float:right; color: ${pFib < 50 ? '#ff3232' : '#ddd'}">${Math.round(pFib)}%</span>
                </div>
                <div class="stat-bar"><div class="stat-fill" style="width: ${Math.min(pFib, 100)}%; background: ${pFib < 50 ? '#ff3232' : 'var(--accent-color)'};"></div></div>
            </div>
            <div class="summary-stat">
                <div class="stat-name">Average Daily Added Sugar (${Math.round(avgSug)}g / ${usdaTarget.sugar}g limit)
                    <span style="float:right; color: ${pSug > 100 ? '#ff3232' : '#ddd'}">${Math.round(pSug)}%</span>
                </div>
                <div class="stat-bar"><div class="stat-fill" style="width: ${Math.min(pSug, 100)}%; background: ${pSug > 100 ? '#ff3232' : 'var(--accent-color)'};"></div></div>
            </div>
        `;
    }
});