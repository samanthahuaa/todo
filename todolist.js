import React, {Component} from 'React'

class todolist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newItem: '',
            list:[]
        }
    }

    updateInput(key,value) {
        this.setState({
            [key]:value
        })
    }

    addItem() {
        const newItem = {
            id: Date.now(),
            value: this.state.newItem.slice()
        }

        const list=[...this.state.list]

        list.push(newItem)

        this.setState[{
            list,
            newItem: ''
        }]
    }

    deleteItem(id) {
        const list = [...this.state.list]
        const updatedList = list.filter(item => item.id !== id)

        this.setState({list: updatedList})
    }

    render() {
        return(
            <div className='App'>
                <input
                    type='text'
                    placeholder='Enter new task here'
                    value={this.state.newItem}
                    onChange = {e => this.updateInput('newItem', e.target.value)}
                />
                <button 
                    onCLick = {() => this.addItem()}
                >
                Add
                </button>
                <ul>
                    {this.state.list.map(item => {
                        return (
                            <li key={item.id}>
                            {item.value}
                            <button
                                onClick ={() => this.deleteItem(item.id)}
                            > 
                            x
                            </button>
                            </li>
                        )
                    })}
                </ul>
                const randomId = item.id[Math.floor(Math.random() * item.id.length)]

            </div>
        )
    }

    procrastinate() {
        const styleChange = {
        fontStyle: 'italic',
        color: '#cdcdcd'
    }}

    
    render () {
        return(
        <button 
            onClick ={() => procrastinate(randomId)}
        >
        Procrastinate!
        </button>
        )}

}