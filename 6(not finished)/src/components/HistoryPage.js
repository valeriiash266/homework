
function HistoryPage(orders) {

    const pageContent = document.createElement('div');


    if (!orders || orders.length === 0) {

        pageContent.textContent = 'No order history';
    } else {



        const tableElement = document.createElement('table');
        tableElement.innerHTML = `
      <tr>
        <th>Order ID</th>
        <th>Date</th>
        <th>Total Price</th>
      </tr>
    `;


        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.date}</td>
        <td>${order.totalPrice}</td>
      `;
            tableElement.appendChild(row);
        });


        pageContent.appendChild(tableElement);
    }


    return pageContent;
}


export { HistoryPage };
