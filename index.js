const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeTriggers = document.querySelector('.theme-trigger');

menuBtn.addEventListener('click',()=>{
        sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click',()=> {
        sideMenu.style.display = 'none';
})

themeTriggers.addEventListener('click',()=>{
        document.body.classList.toggle('dark-theme-variables');

        themeTriggers.querySelector('span:nth-child(1)').classList.toggle('active');
        themeTriggers.querySelector('span:nth-child(2)').classList.toggle('active');

})

orders.forEach(orders => {
        const tr = document.createElement('tr');
        const trContent = `<td>${orders.productName}</td>
                           <td>${orders.productNumber}</td>
                           <td>${orders.paymentStatus}</td>
                           <td class="${orders.shipping === 'Declined' ? 'danger' : 
                           orders.shipping === 'Pending' ? 'warning' : 'primary'}">${orders.shipping}</td>
                           <td class="primart">Details</td>
        `;

        tr.innerHTML = trContent
        document.querySelector('table tbody').appendChild(tr);
})