console.log('hello')

async function getValues() {
    try {
        const result = await fetch('data/data.json')
        const response = await result.json();

        console.log({response});

        const ticketHeading = document.querySelectorAll('.ticket-heading')
        const ticketData = document.querySelectorAll('.ticket-data')
        const ticketSub = document.querySelectorAll('.ticket-sub')
    
        ticketHeading.forEach((temp, index) => {
            //console.log(temp);
            let pTicket = document.createElement('p');
            pTicket.innerHTML = response.tickets[index].ticket_heading;
            temp.appendChild(pTicket);
        })
        ticketData.forEach((temp, index) => {
            //console.log(temp);
            let pTicket = document.createElement('p');
            pTicket.innerHTML = response.tickets[index].ticket_data;
            temp.appendChild(pTicket);
        })
        ticketSub.forEach((temp, index) => {
            //console.log(temp);
            let pTicket = document.createElement('p');
            pTicket.innerHTML = response.tickets[index].ticket_sub;
            temp.appendChild(pTicket);
        })
    } catch (error) {
        console.log(error);
    }
}

getValues();