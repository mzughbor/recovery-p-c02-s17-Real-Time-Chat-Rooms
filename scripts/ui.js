export class ChatUi {
    constructor(list) {
        this.list = list;
    }
    // Clear the chat list
    clear() {
        this.list.innerHTML = '';
    }
    render(data) {
        // Handle cases where created_at is null
        const when = data.created_at
        ? dateFns.distanceInWordsToNow(data.created_at.toDate(), { addSuffix: true })
        : 'just now';
        
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
        `;
        this.list.innerHTML += html;
    }  
}