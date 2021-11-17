// inputs
let vendor = document.getElementById('vendor');
let media = document.getElementById('media');
let corp = document.getElementById('corp');
let team = document.getElementById('team');

// buttons
let brex_btn = document.getElementById('brex_btn');
let stripe_btn = document.getElementById('stripe_btn');
let amex_btn = document.getElementById('amex_btn');

// total label
let brex_business_card = document.getElementById('brex_business_card');
let stripe_business_card = document.getElementById('stripe_business_card');
let amex_business_card = document.getElementById('amex_business_card');

// total value
let brex_total = document.getElementById('brex_total');
let stripe_total = document.getElementById('stripe_total');
let amex_total = document.getElementById('amex_total');
let unlimited_rewards = document.getElementById('unlimited_rewards');
let lifetime_rewards = document.getElementById('lifetime_rewards');

function calcSum() {
    let sum = 0;
    sum += Number(vendor.value) + Number(media.value) + Number(corp.value) + Number(team.value);
    return sum;
}

// toggle between hide and show and calculate the total
brex_btn.onclick = () => {
    brex_btn.classList.add('active');
    stripe_btn.classList.remove('active');
    amex_btn.classList.remove('active');

    brex_business_card.classList.add('active');
    stripe_business_card.classList.remove('active');
    amex_business_card.classList.remove('active');
    let total = calcSum() * 0.3;
    brex_total.innerText = total;
}

// toggle between hide and show and calculate the total
stripe_btn.onclick = () => {
    stripe_btn.classList.add('active');
    brex_btn.classList.remove('active');
    amex_btn.classList.remove('active');

    stripe_business_card.classList.add('active');
    brex_business_card.classList.remove('active');
    amex_business_card.classList.remove('active');
    let total = calcSum() * 2.9;
    stripe_total.innerText = total;
}

// toggle between hide and show and calculate the total
amex_btn.onclick = () => {
    amex_btn.classList.add('active');
    brex_btn.classList.remove('active');
    stripe_btn.classList.remove('active');

    amex_business_card.classList.add('active');
    brex_business_card.classList.remove('active');
    stripe_business_card.classList.remove('active');
    let total = calcSum() * 1.3;
    amex_total.innerText = total;
}

// calculate the total of the unlimited rewards and life time rewards
vendor.onkeyup = () => {
    unlimited_rewards.innerText = calcSum() * 1.1;
    lifetime_rewards.innerText = calcSum() * 1.2;
}

media.onkeyup = () => {
    unlimited_rewards.innerText = calcSum() * 1.1;
    lifetime_rewards.innerText = calcSum() * 1.2;
}

corp.onkeyup = () => {
    unlimited_rewards.innerText = calcSum() * 1.1;
    lifetime_rewards.innerText = calcSum() * 1.2;
}

team.onkeyup = () => {
    unlimited_rewards.innerText = calcSum() * 1.1;
    lifetime_rewards.innerText = calcSum() * 1.2;
}
