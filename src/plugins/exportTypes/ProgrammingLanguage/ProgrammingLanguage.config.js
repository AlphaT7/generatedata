export default {
	name: "Programming Language",
	schema: {
		"title": "ProgrammingLanguage",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"type": "object",
		"properties": {
			"language": {
				"enum": ["JavaScript", "Perl", "PHP", "Ruby", "CSharp"]
			}
		},
		"required": ["language"]
	}
};
