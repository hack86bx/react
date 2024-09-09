import Button from 'react-bootstrap/Button';

function Buttton(props) {
    return(
        <div>
            <button>
                
                    {props.text}
            </button>
            <Button as="a" variant="primary">
    Button as link
  </Button>
        </div>
    )
}

export default Buttton;