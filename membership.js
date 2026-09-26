/**
 * IPL 2026 - Franchise Membership Simplified Javascript
 * Performs simple jQuery form validation without storage or custom success page
 */

$(document).ready(function() {
    const registrationForm = $('#registration-form');

    if (registrationForm.length > 0) {
        registrationForm.on('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            $('.validation-error').remove();
            
            let isValid = true;

            // 1. Team selection
            const teamSelect = $('#member-team');
            if (teamSelect.val() === '' || teamSelect.val() === null) {
                isValid = false;
                $('<div class="validation-error"><i class="fa-solid fa-circle-exclamation"></i> Team selection is required.</div>').insertAfter(teamSelect);
            }

            // 2. Name validation
            const nameInput = $('#member-name');
            const nameVal = nameInput.val().trim();
            if (nameVal === '') {
                isValid = false;
                $('<div class="validation-error"><i class="fa-solid fa-circle-exclamation"></i> Full Name is required.</div>').insertAfter(nameInput);
            }

            // 3. Email validation
            const emailInput = $('#member-email');
            const emailVal = emailInput.val().trim();
            if (emailVal === '') {
                isValid = false;
                $('<div class="validation-error"><i class="fa-solid fa-circle-exclamation"></i> Email address is required.</div>').insertAfter(emailInput);
            }

            // 4. Password validation
            const passwordInput = $('#member-password');
            const passwordVal = passwordInput.val();
            if (passwordVal === '') {
                isValid = false;
                $('<div class="validation-error"><i class="fa-solid fa-circle-exclamation"></i> Password is required.</div>').insertAfter(passwordInput);
            }

            // 5. Confirm Password validation
            const confirmInput = $('#member-confirm-password');
            const confirmVal = confirmInput.val();
            if (confirmVal === '') {
                isValid = false;
                $('<div class="validation-error"><i class="fa-solid fa-circle-exclamation"></i> Please confirm your password.</div>').insertAfter(confirmInput);
            } else if (confirmVal !== passwordVal) {
                isValid = false;
                $('<div class="validation-error"><i class="fa-solid fa-circle-exclamation"></i> Passwords do not match.</div>').insertAfter(confirmInput);
            }

            if (isValid) {
                // Do not store in local storage
                // Do not show custom success banner
                // Show simple standard browser alert
                alert('Validation successful! Form ready for submission.');
            }
        });
    }
});
