const NoteMixins = {
  data: {
    notes: [
      {
        id: 1,
        title: 'Title 1',
        description: '- Morning Status'
      }
    ]
  },
  methods: {
    getNotes() {
      return this.notes;
    }
  }
}

export default NoteMixins;