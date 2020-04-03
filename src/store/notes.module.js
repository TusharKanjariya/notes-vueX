export default {
    state: {
        notes: [
            { title: "Morning Tasks", desc: "- Yoga\n- Breakfast\n- Go to office" },
            { title: "Office Tasks", desc: "- Meetings\n- Work\n- Mettings" },
        ]
    },
    mutations: {
        addNote(state, note) {
            state.notes.push(note);
        },
        deleteNote(state, index) {
            state.notes.splice(index, 1);
        },
        updateNote(state, noteData) {
            state.notes[noteData.id].title = noteData.title;
            state.notes[noteData.id].desc = noteData.desc;
        }
    },
    actions: {
        addNotes(context, note) {
            context.commit('addNote', note);
        },
        deleteNotes(context, index) {
            context.commit('deleteNote', index);
        },
        noteUpdate(context, noteData) {
            context.commit('updateNote', noteData);
        }
    },
    getters: {
        getNotes(state) {
            return state.notes;
        },
        getItemByIndex: (state) => (index) => {
            return state.notes[index];
        },
    }
}