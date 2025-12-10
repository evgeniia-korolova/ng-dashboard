import { inject, Injectable } from '@angular/core';
import { FormService } from './form-service';
import { FormField } from '../models/field.interface';
import { FieldTypesService } from './field-types-service';

@Injectable({
  providedIn: 'root',
})
export class ExportFormService {

  formService = inject(FormService);
  fieldTypeService = inject(FieldTypesService);

  exportForm() {
    const formCode = this.generateFormCode();
    const blob = new Blob([formCode], {type: 'text/plain'});
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form.ts';
    link.click();
    window.URL.revokeObjectURL(url)
    console.log(formCode);
  }

  generateFormCode(): string {
    let code = this.generateImports();
    code += this.generateComponentDecorator();
    code += `template: \`\n`;
    code += `<form class="flex flex-col gap-4">\n`;

    for(const row of this.formService.rows()) {
      if(row.fields.length > 0) {
        code += `<div class="flex gap-4 flex-wrap">\n`;
        for(const field of row.fields) {
          code += `<div class="flex-1"\n`;
          code += this.generateFieldCode(field);
          code += `</div>\n`;
        }
        code += `</div>\n`;
      }
    }

    code += `</form>\n`;
    code += `\`\n`;
    code += `})\n`;
    code += `export class GeneratedFormComponent {\n`;
    code += `}\n`;

    return code;
  }

  generateFieldCode(field: FormField): string {
    const fieldDef = this.fieldTypeService.getFieldType(field.type);
    return fieldDef?.generateCode(field) || ''
  }

  generateImports(): string {
    return (
      `import {Component} from '@angular/core';\n` +
      `import { CommonModule } from '@angular/common';\n` +
      `import { FormsModule } from '@angular/forms';\n` +
      `import { MatFormFieldModule } from '@angular/material/form-field';\n` +
      `import { MatInputModule } from '@angular/material/input';\n` +
      `import { MatSelectModule } from '@angular/material/select';\n` +
      `import { MatCheckboxModule } from '@angular/material/checkbox';\n` +
      `import { MatRadioModule } from '@angular/material/radio';\n` +
      `import { MatDatepickerModule } from '@angular/material/datepicker';\n` +
      `import { MatNativeDateModule } from '@angular/material/core';\n` +
      `import { MatButtonModule } from '@angular/material/button';\n\n`
    );
  }

  generateComponentDecorator(): string {
    return (
      `@Component({\n` +
      `selector: 'app-generated-form', \n` +
      `  standalone: true,\n` +
      `  imports: [\n` +
      `    CommonModule,\n` +
      `    FormsModule,\n` +
      `    MatFormFieldModule,\n` +
      `    MatInputModule,\n` +
      `    MatSelectModule,\n` +
      `    MatCheckboxModule,\n` +
      `    MatRadioModule,\n` +
      `    MatDatepickerModule,\n` +
      `    MatNativeDateModule,\n` +
      `    MatButtonModule\n` +
      `  ],\n`
    );
  }

  
}
