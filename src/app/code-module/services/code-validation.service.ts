import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import locale from '../personal-code.locale.json';
import { CodeParserService } from './code-parser.service';
import { FormValue } from '../models/form-value.interface';
import { ErrorService } from '../../error-module/services/error.service';

@Injectable()
export class CodeValidationService {
	constructor(
		private errorService: ErrorService,
		private codeParser: CodeParserService,
	) {}

	/**
	 * Validate written code
	 * @param codeFormControl FormControl of 'code' input
	 */
	public validate(codeFormControl: FormControl<string>): FormValue | undefined {
		const codeValue = codeFormControl.value;

		// written code is out of pattern
		if (codeFormControl.hasError('pattern')) {
			this.errorService.setError(locale['INVALID_PATTERN']);
			return undefined;
		}

		// calculate data in service
		const parsedCode = this.codeParser.parseCode(codeValue);
		const [year, month, day] = parsedCode.date;
		const isDateValid = this.codeParser.checkDateValidity(year, month, day);

		// written code is not valid date
		if (!isDateValid) {
			this.errorService.setError(locale['INVALID_DATE']);
			return undefined;
		}

		this.errorService.clear();
		return parsedCode;
	}
}
