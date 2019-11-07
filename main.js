const uat = JSON.parse(
  '{"id":"5c57d368-d8ec-45ac-8206-9033974cc0b5","name":"Become","partner_type":"strategic_partner","min_credit_score":620,"logo_url":"https://fc-us-direct-app-images-production.s3.amazonaws.com/become-logo.png","created_at":"2019-02-08T11:56:03Z","updated_at":"2019-09-27T14:52:56Z","broker_fee_percentage":"0.02","origination_fee_percentage":"0.0599","custom_origination_fee_table":false,"eln_database_id":null,"custom_affiliate_link_identifier":null,"disabled":false,"spapi_flow":null,"may_provide_bank_statements":true}'
);

const staging = JSON.parse(
  '{"id":"5c57d368-d8ec-45ac-8206-9033974cc0b5","name":"Become","partner_type":"strategic_partner","min_credit_score":620,"logo_url":"https://fc-us-direct-app-images-production.s3.amazonaws.com/become-logo.png","created_at":"2019-02-08T11:57:47Z","updated_at":"2019-09-27T19:03:07Z","broker_fee_percentage":"0.02","origination_fee_percentage":"0.0599","custom_origination_fee_table":false,"eln_database_id":null,"custom_affiliate_link_identifier":null,"disabled":false,"spapi_flow":null,"may_provide_bank_statements":true}'
);

console.log({ uat, staging });
