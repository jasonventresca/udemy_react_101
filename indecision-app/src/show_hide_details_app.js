class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle_details = this.toggle_details.bind(this);
        this.state = {
            'details_showing': false
        };
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle_details}>{this.state.details_showing ? 'Hide details' : 'Show details'}</button>
                {this.state.details_showing && (
                    <div>
                        <p>"here's my dirty lil' secret!"</p>
                    </div>
                )}
            </div>
        );
    }

    toggle_details() {
        this.setState((prevState) => {
            return {
                'details_showing': !prevState.details_showing
            }
        });
    }
}

const app_root = document.getElementById('app')
ReactDOM.render(<Toggle />, app_root);
