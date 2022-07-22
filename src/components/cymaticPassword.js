import React, { Component } from 'react';
import { Form} from 'react-bootstrap';

const cymatic = {
  engine: window.CymaticXid,
  sdk: null,
};

cymatic.init = function (
  options = {
    login: {
      dynamic: !0,
      selector: '.card-body > form:nth-child(2)',  
      username: 'input.form-control:nth-child(2)', 
      password: 'input.form-control:nth-child(4)', 
      submit: 'button.w-100',
    },
  }
) {
  return new Promise(function (resolve, reject) {
    cymatic.engine.v2.init(options, function (error, sdk) {
      if (error) {
        return reject(error);
      }
      cymatic.sdk = sdk;
      return resolve(sdk);
    });
  });
};

cymatic.getSdk = async function () {
  return cymatic.sdk || (await cymatic.init());
};

class CyPassword extends Component {
  state = { criterias: [] };

  constructor(props) {
    console.log(props);
    super(props);
    this.passwordField = React.createRef();
  }

  async componentDidMount() {
    let sdk = await cymatic.getSdk();
    this.password = new sdk.PasswordField({ src: this.passwordField.current });
    this.password.on('off', this.printCriterias.bind(this));
    this.password.on('data', this.printCriterias.bind(this));
    this.password.on('empty', this.printCriterias.bind(this));
    this.password.on('validate', this.assignValid.bind(this));
    this.printCriterias({ type: 'empty' });
  }

  printCriterias(event) {
    if (event.type == 'off') {
      return this.setState({ criterias: [] });
    }
    let criterias = [];
    for (let criteria in this.password.criterias) {
      let color =
        event.type == 'empty'
          ? 'list-group-item list-group-item-secondary'
          : event.detail.failed.find((failed) => failed == criteria)
          ? 'list-group-item list-group-item-danger'
          : 'list-group-item list-group-item-success';
      criterias.push(
        <li style={styles.criterias} className={color} key={criteria}>
          {' '}
          {this.password.criterias[criteria].message}{' '}
        </li>
      );
    }
    this.setState({ criterias });
  }

  assignValid(event) {
    this.passwordField.current.valid = event.detail.isValid;
  }

  render() {
    return (
      <div>
        {this.props.initSdk && (
          <div>
            <Form.Control
            style={styles.pass}
              id='pass'
              onChange={() =>
                this.props.setPassInput(document.getElementById('pass').value)
              }
              cy-password=''
              ref={this.passwordField}
              type='password'
            />

            <ul
              style={styles.criteriaTemplate}
              className='list-group'
              cy-components=''
            >
              {' '}
              {this.state.criterias}{' '}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  criterias: {
    fontSize: '.8rem',
    fontWeight: 0.5,
    lineHeight: 0.5,
    flexGrow: 1,
    margin: 1,
  },
  criteriaTemplate: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  pass:{
    marginBottom:10,
  },
};

export default CyPassword;

