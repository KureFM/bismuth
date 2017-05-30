import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  jobkey: attr(),
  cron: attr(),
  count: attr(),
  startAt: attr('date')
});
