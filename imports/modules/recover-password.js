import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

// reset page to own-email
const handleRecovery = () => {
	Accounts.forgotPassword(
		{
			email: document.querySelector('[name="emailAddress"]').value
		},
		error => {
			if (error) {
				Bert.alert(error.reason, 'warning');
			} else {
				Bert.alert('Check your inbox for a reset link!', 'success');
			}
		}
	);
};

// jquery validate && jquery
const validate = () => {
	$(component.recoverPasswordForm).validate({
		rules: {
			emailAddress: {
				required: true,
				email: true
			}
		},
		messages: {
			emailAddress: {
				required: 'Need an email address here.',
				email: 'Is this email address legit?'
			}
    },
    // after validating, call submit to exec
		submitHandler() {
			handleRecovery();
		}
	});
};

export default function handleRecoverPassword(options) {
	component = options.component;
	validate();
}
