(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3df6e8dc"],{"644c":function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_federated_buttons",(function(){return c})),n.d(t,"amplify_strike",(function(){return s}));var r=n("6260"),a=n("1f3a"),o=n("7a37"),i=n("bf82"),E=(n("6c18"),n("7585")),u=n("ddac"),c=function(){function e(e){Object(r["k"])(this,e),this.authState=o["a"].SignIn,this.federated={},this.handleAuthStateChange=u["d"]}return e.prototype.componentWillLoad=function(){if(!i["a"]||"function"!==typeof i["a"].configure)throw new Error(E["d"]);var e=i["a"].configure().oauth,t=void 0===e?{}:e;t["domain"]?this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),t):t["awsCognito"]&&(this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),t["awsCognito"])),t["auth0"]&&(this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),t["auth0"]))},e.prototype.render=function(){if(!Object.values(o["a"]).includes(this.authState))return null;if(Object(a["d"])(this.federated))return null;var e=this.federated,t=e.amazonClientId,n=e.auth0Config,i=e.facebookAppId,E=e.googleClientId,u=e.oauthConfig;return Object(r["i"])("div",null,E&&Object(r["i"])("div",null,Object(r["i"])("amplify-google-button",{clientId:E,handleAuthStateChange:this.handleAuthStateChange})),i&&Object(r["i"])("div",null,Object(r["i"])("amplify-facebook-button",{appId:i,handleAuthStateChange:this.handleAuthStateChange})),t&&Object(r["i"])("div",null,Object(r["i"])("amplify-amazon-button",{clientId:t,handleAuthStateChange:this.handleAuthStateChange})),u&&Object(r["i"])("div",null,Object(r["i"])("amplify-oauth-button",{config:u})),n&&Object(r["i"])("div",null,Object(r["i"])("amplify-auth0-button",{config:n,handleAuthStateChange:this.handleAuthStateChange})))},e}(),_=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}",s=function(){function e(e){Object(r["k"])(this,e)}return e.prototype.render=function(){return Object(r["i"])("span",{class:"strike-content"},Object(r["i"])("slot",null))},e}();s.style=_},"6c18":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,a,o=n("60ac");(function(e){e["BACK_TO_SIGN_IN"]="Back to Sign In",e["CHANGE_PASSWORD_ACTION"]="Change",e["CHANGE_PASSWORD"]="Change Password",e["CODE_LABEL"]="Verification code",e["CODE_PLACEHOLDER"]="Enter code",e["CONFIRM_SIGN_UP_CODE_LABEL"]="Confirmation Code",e["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"]="Enter your code",e["CONFIRM_SIGN_UP_HEADER_TEXT"]="Confirm Sign up",e["CONFIRM_SIGN_UP_LOST_CODE"]="Lost your code?",e["CONFIRM_SIGN_UP_RESEND_CODE"]="Resend Code",e["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"]="Confirm",e["CONFIRM_SMS_CODE"]="Confirm SMS Code",e["CONFIRM_TOTP_CODE"]="Confirm TOTP Code",e["CONFIRM"]="Confirm",e["CREATE_ACCOUNT_TEXT"]="Create account",e["EMAIL_LABEL"]="Email Address *",e["EMAIL_PLACEHOLDER"]="Enter your email address",e["FORGOT_PASSWORD_TEXT"]="Forgot your password?",e["LESS_THAN_TWO_MFA_VALUES_MESSAGE"]="Less than two MFA types available",e["NEW_PASSWORD_LABEL"]="New password",e["NEW_PASSWORD_PLACEHOLDER"]="Enter your new password",e["NO_ACCOUNT_TEXT"]="No account?",e["USERNAME_REMOVE_WHITESPACE"]="Username cannot contain whitespace",e["PASSWORD_REMOVE_WHITESPACE"]="Password cannot start or end with whitespace",e["PASSWORD_LABEL"]="Password *",e["PASSWORD_PLACEHOLDER"]="Enter your password",e["PHONE_LABEL"]="Phone Number *",e["PHONE_PLACEHOLDER"]="(555) 555-1212",e["QR_CODE_ALT"]="qrcode",e["RESET_PASSWORD_TEXT"]="Reset password",e["RESET_YOUR_PASSWORD"]="Reset your password",e["SELECT_MFA_TYPE_HEADER_TEXT"]="Select MFA Type",e["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"]="Verify",e["SEND_CODE"]="Send Code",e["SUBMIT"]="Submit",e["SETUP_TOTP_REQUIRED"]="TOTP needs to be configured",e["SIGN_IN_ACTION"]="Sign In",e["SIGN_IN_HEADER_TEXT"]="Sign in to your account",e["SIGN_IN_TEXT"]="Sign in",e["SIGN_IN_WITH_AMAZON"]="Sign in with Amazon",e["SIGN_IN_WITH_AUTH0"]="Sign in with Auth0",e["SIGN_IN_WITH_AWS"]="Sign in with AWS",e["SIGN_IN_WITH_FACEBOOK"]="Sign in with Facebook",e["SIGN_IN_WITH_GOOGLE"]="Sign in with Google",e["SIGN_OUT"]="Sign Out",e["SIGN_UP_EMAIL_PLACEHOLDER"]="Email",e["SIGN_UP_HAVE_ACCOUNT_TEXT"]="Have an account?",e["SIGN_UP_HEADER_TEXT"]="Create a new account",e["SIGN_UP_PASSWORD_PLACEHOLDER"]="Password",e["SIGN_UP_SUBMIT_BUTTON_TEXT"]="Create Account",e["SIGN_UP_USERNAME_PLACEHOLDER"]="Username",e["SUCCESS_MFA_TYPE"]="Success! Your MFA Type is now:",e["TOTP_HEADER_TEXT"]="Scan then enter verification code",e["TOTP_LABEL"]="Enter Security Code:",e["TOTP_ISSUER"]="AWSCognito",e["TOTP_SETUP_FAILURE"]="TOTP Setup has failed",e["TOTP_SUBMIT_BUTTON_TEXT"]="Verify Security Token",e["TOTP_SUCCESS_MESSAGE"]="Setup TOTP successfully!",e["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"]="Failed! Unable to configure MFA at this time",e["USERNAME_LABEL"]="Username *",e["USERNAME_PLACEHOLDER"]="Enter your username",e["VERIFY_CONTACT_EMAIL_LABEL"]="Email",e["VERIFY_CONTACT_HEADER_TEXT"]="Account recovery requires verified contact information",e["VERIFY_CONTACT_PHONE_LABEL"]="Phone Number",e["VERIFY_CONTACT_SUBMIT_LABEL"]="Submit",e["VERIFY_CONTACT_VERIFY_LABEL"]="Verify",e["ADDRESS_LABEL"]="Address",e["ADDRESS_PLACEHOLDER"]="Enter your address",e["NICKNAME_LABEL"]="Nickname",e["NICKNAME_PLACEHOLDER"]="Enter your nickname",e["BIRTHDATE_LABEL"]="Birthday",e["BIRTHDATE_PLACEHOLDER"]="Enter your birthday",e["PICTURE_LABEL"]="Picture URL",e["PICTURE_PLACEHOLDER"]="Enter your picture URL",e["FAMILY_NAME_LABEL"]="Family Name",e["FAMILY_NAME_PLACEHOLDER"]="Enter your family name",e["PREFERRED_USERNAME_LABEL"]="Preferred Username",e["PREFERRED_USERNAME_PLACEHOLDER"]="Enter your preferred username",e["GENDER_LABEL"]="Gender",e["GENDER_PLACEHOLDER"]="Enter your gender",e["PROFILE_LABEL"]="Profile URL",e["PROFILE_PLACEHOLDER"]="Enter your profile URL",e["GIVEN_NAME_LABEL"]="First Name",e["GIVEN_NAME_PLACEHOLDER"]="Enter your first name",e["ZONEINFO_LABEL"]="Time zone",e["ZONEINFO_PLACEHOLDER"]="Enter your time zone",e["LOCALE_LABEL"]="Locale",e["LOCALE_PLACEHOLDER"]="Enter your locale",e["UPDATED_AT_LABEL"]="Updated At",e["UPDATED_AT_PLACEHOLDER"]="Enter the time the information was last updated",e["MIDDLE_NAME_LABEL"]="Middle Name",e["MIDDLE_NAME_PLACEHOLDER"]="Enter your middle name",e["WEBSITE_LABEL"]="Website",e["WEBSITE_PLACEHOLDER"]="Enter your website",e["NAME_LABEL"]="Full Name",e["NAME_PLACEHOLDER"]="Enter your full name",e["PHOTO_PICKER_TITLE"]="Picker Title",e["PHOTO_PICKER_HINT"]="Ancillary text or content may occupy this space here",e["PHOTO_PICKER_PLACEHOLDER_HINT"]="Placeholder hint",e["PHOTO_PICKER_BUTTON_TEXT"]="Button",e["IMAGE_PICKER_TITLE"]="Add Profile Photo",e["IMAGE_PICKER_HINT"]="Preview the image before upload",e["IMAGE_PICKER_PLACEHOLDER_HINT"]="Tap to image select",e["IMAGE_PICKER_BUTTON_TEXT"]="Upload",e["PICKER_TEXT"]="Pick a file",e["TEXT_FALLBACK_CONTENT"]="Fallback Content",e["CONFIRM_SIGN_UP_FAILED"]="Confirm Sign Up Failed",e["SIGN_UP_FAILED"]="Sign Up Failed"})(r||(r={})),function(e){e["CHATBOT_TITLE"]="ChatBot Lex",e["TEXT_INPUT_PLACEHOLDER"]="Write a message",e["VOICE_INPUT_PLACEHOLDER"]="Click mic to speak",e["CHAT_DISABLED_ERROR"]="Error: Either voice or text must be enabled for the chatbot",e["NO_BOT_NAME_ERROR"]="Error: Bot name must be provided to ChatBot"}(a||(a={}));var i=Object.assign(Object.assign(Object.assign({},r),o["a"]),a)},7585:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return A})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return T})),n.d(t,"h",(function(){return R})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return I})),n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return L})),n.d(t,"o",(function(){return O})),n.d(t,"p",(function(){return S})),n.d(t,"q",(function(){return c})),n.d(t,"r",(function(){return C})),n.d(t,"s",(function(){return _})),n.d(t,"t",(function(){return o})),n.d(t,"u",(function(){return E})),n.d(t,"v",(function(){return r}));var r="username",a="email",o="code",i="phone",E="password",u="country-dial-code-select",c="+1",_="amplify-auth-source",s="amplify-redirected-from-hosted-ui",l="amplify-authenticator-authState",d="Phone number can not be empty",A="No Auth module found, please ensure @aws-amplify/auth is imported",L="No Storage module found, please ensure @aws-amplify/storage is imported",f="No Interactions module found, please ensure @aws-amplify/interactions is imported",T="SETUP_TOTP",O="User has not set up software token mfa",S="User has not verified software token mfa",C="SUCCESS",h="auth",g="UI Auth",R="ToastAuthError",I="AuthStateChange"},"7a37":function(e,t,n){"use strict";var r,a,o,i,E;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return i})),function(e){e["SignUp"]="signup",e["SignOut"]="signout",e["SignIn"]="signin",e["Loading"]="loading",e["SignedOut"]="signedout",e["SignedIn"]="signedin",e["SigningUp"]="signingup",e["ConfirmSignUp"]="confirmSignUp",e["confirmingSignUpCustomFlow"]="confirmsignupcustomflow",e["ConfirmSignIn"]="confirmSignIn",e["confirmingSignInCustomFlow"]="confirmingsignincustomflow",e["VerifyingAttributes"]="verifyingattributes",e["ForgotPassword"]="forgotpassword",e["ResetPassword"]="resettingpassword",e["SettingMFA"]="settingMFA",e["TOTPSetup"]="TOTPSetup",e["CustomConfirmSignIn"]="customConfirmSignIn",e["VerifyContact"]="verifyContact"}(r||(r={})),function(e){e["TOTP"]="TOTP",e["SMS"]="SMS",e["NOMFA"]="NOMFA"}(a||(a={})),function(e){e["SoftwareTokenMFA"]="SOFTWARE_TOKEN_MFA",e["SMSMFA"]="SMS_MFA",e["NewPasswordRequired"]="NEW_PASSWORD_REQUIRED",e["MFASetup"]="MFA_SETUP",e["CustomChallenge"]="CUSTOM_CHALLENGE"}(o||(o={})),function(e){e["Password"]="password"}(i||(i={})),function(e){e["username"]="username",e["email"]="email",e["phone_number"]="phone_number"}(E||(E={}))},ddac:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return L})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return C})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return O}));var r=n("36de"),a=n("4327"),o=n("2482"),i=n("7a37"),E=n("00ef"),u=n("6c18"),c=n("7585"),_=function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function E(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):a(e.value).then(i,E)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:E(0),throw:E(1),return:E(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function E(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(a=2&o[0]?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(E){o=[6,E],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},l=new r["a"]("helpers"),d=function(e,t){function n(r){if(!r||r===document||r===window)return null;if(r.matches(e))return t;r.assignedSlot&&(r=r.assignedSlot);var a=r.closest(e);return a||n(r.getRootNode().host)}return n(t)},A=function(e){a["a"].dispatch(c["i"],{event:c["h"],message:o["a"].get(e.message)})},L=function(e,t){a["a"].dispatch(c["i"],{event:c["j"],message:e,data:t})},f=function(e){if(!e.phoneNumberValue)throw new Error(c["e"]);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},T=function(e){if(!(e in i["d"]))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(i["d"]))},O=function(e){var t=function(t){return _(void 0,void 0,void 0,(function(){var n,r,a;return s(this,(function(o){switch(o.label){case 0:switch(n=t.payload,r=n.event,r){case c["j"]:return[3,1]}return[3,8];case 1:if(!n.message)return[3,7];if(n.message!==i["a"].SignedIn)return[3,6];o.label=2;case 2:return o.trys.push([2,4,,5]),[4,E["a"].currentAuthenticatedUser()];case 3:return a=o.sent(),e(n.message,a),[3,5];case 4:return o.sent(),l.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(n.message,n.data),o.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return a["a"].listen(c["i"],t),function(){return a["a"].remove(c["i"],t)}},S=function(e){return!(null===e["hint"]||"string"===typeof e["hint"])},C=function(){return{address:{label:o["a"].get(u["a"].ADDRESS_LABEL),placeholder:o["a"].get(u["a"].ADDRESS_PLACEHOLDER)},nickname:{label:o["a"].get(u["a"].NICKNAME_LABEL),placeholder:o["a"].get(u["a"].NICKNAME_PLACEHOLDER)},birthdate:{label:o["a"].get(u["a"].BIRTHDATE_LABEL),placeholder:o["a"].get(u["a"].BIRTHDATE_PLACEHOLDER)},phone_number:{label:o["a"].get(u["a"].PHONE_LABEL),placeholder:o["a"].get(u["a"].PHONE_PLACEHOLDER)},email:{lable:o["a"].get(u["a"].EMAIL_LABEL),placeholder:o["a"].get(u["a"].EMAIL_PLACEHOLDER)},picture:{label:o["a"].get(u["a"].PICTURE_LABEL),placeholder:o["a"].get(u["a"].PICTURE_PLACEHOLDER)},family_name:{label:o["a"].get(u["a"].FAMILY_NAME_LABEL),placeholder:o["a"].get(u["a"].FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:o["a"].get(u["a"].PREFERRED_USERNAME_LABEL),placeholder:o["a"].get(u["a"].PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:o["a"].get(u["a"].GENDER_LABEL),placeholder:o["a"].get(u["a"].GENDER_PLACEHOLDER)},profile:{label:o["a"].get(u["a"].PROFILE_LABEL),placeholder:o["a"].get(u["a"].PROFILE_PLACEHOLDER)},given_name:{label:o["a"].get(u["a"].GIVEN_NAME_LABEL),placeholder:o["a"].get(u["a"].GIVEN_NAME_PLACEHOLDER)},zoneinfo:{label:o["a"].get(u["a"].ZONEINFO_LABEL),placeholder:o["a"].get(u["a"].ZONEINFO_PLACEHOLDER)},locale:{label:o["a"].get(u["a"].LOCALE_LABEL),placeholder:o["a"].get(u["a"].LOCALE_PLACEHOLDER)},updated_at:{label:o["a"].get(u["a"].UPDATED_AT_LABEL),placeholder:o["a"].get(u["a"].UPDATED_AT_PLACEHOLDER)},middle_name:{label:o["a"].get(u["a"].MIDDLE_NAME_LABEL),placeholder:o["a"].get(u["a"].MIDDLE_NAME_PLACEHOLDER)},website:{label:o["a"].get(u["a"].WEBSITE_LABEL),placeholder:o["a"].get(u["a"].WEBSITE_PLACEHOLDER)},name:{label:o["a"].get(u["a"].NAME_LABEL),placeholder:o["a"].get(u["a"].NAME_PLACEHOLDER)}}};function h(e,t){var n=e.target.name,r=e.target.value;n===c["b"]&&(t.countryDialCodeValue=r),n===c["k"]&&(t.phoneNumberValue=r)}}}]);
//# sourceMappingURL=chunk-3df6e8dc.622c3c70.js.map