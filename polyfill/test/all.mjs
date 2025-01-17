#! /usr/bin/env -S node --experimental-modules

/*
 ** Copyright (C) 2018-2019 Bloomberg LP. All rights reserved.
 ** This code is governed by the license found in the LICENSE file.
 */

import Demitasse from '@pipobscure/demitasse';
import Pretty from '@pipobscure/demitasse-pretty';

import * as exports from './exports.mjs';

import * as absolute from './absolute.mjs';
import * as date from './date.mjs';
import * as time from './time.mjs';
import * as datetime from './datetime.mjs';
import * as duration from './duration.mjs';
import * as datemath from './datemath.mjs';
import * as yearmonth from './yearmonth.mjs';
import * as monthday from './monthday.mjs';
import * as intl from './intl.mjs';

Promise.resolve()
  .then(() => {
    return Demitasse.report(Pretty.reporter);
  })
  .then((failed) => process.exit(failed ? 1 : 0))
  .catch((e) => {
    console.error(e);
    process.exit(-1);
  });
