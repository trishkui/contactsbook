import { create } from 'zustand';

const useContactStore = create((set) => ({
    Contacts: [],

    addContact: function(newContact) {
        set((state) => ({
            Contacts: [newContact, ...state.Contacts],
        }));
    },

    deleteContact: function(ContactId) {
        set((state) => {
            const updatedContacts = state.Contacts.filter((currentContact) => {
                return currentContact.id !== ContactId;
            });
            return { Contacts: updatedContacts };
        });
    },

    blockContact: function(ContactId) {
        set((state) => ({
            Contacts: state.Contacts.map((currentContact) =>
                currentContact.id === ContactId
                    ? { ...currentContact, blocked: !currentContact.blocked } // Toggle blocked state
                    : currentContact
            ),
        }));
    },
}));

export default useContactStore;


  



// const useContactstore = create(Contactstore) ;


// export default useContactstore;