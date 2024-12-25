import { db } from './firebaseConfig.js';
import { where ,orderBy ,query, onSnapshot, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

export class Chatroom {
    constructor(room, username) {
        // remember this const collectionRef = collection(db, "firebase");
        this.room = room;
        this.username = username;
        this.chats = collection(db, 'chat-app');
        this.unsub;
        
    }
    async addChat(message) {
        // format a chat object
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: serverTimestamp(),
        };
        // save the chat document
        const response = await addDoc(this.chats, chat); // Correct usage of addDoc
        return response;
    }
    
    getChats(callback){
        const q = query(
            this.chats,
            where('room', '==', this.room),
            orderBy('created_at')
        );
        this.unsub = onSnapshot( q, snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    // update the ui / later 
                    callback(change.doc.data());
                }
            });
        })
    }
    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
    }
}