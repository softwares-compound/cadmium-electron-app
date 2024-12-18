/**
 * @file create-project.ts
 * @description Contains the validation logic for the "Add Project" form.
 */

import { useProjectCreateStore } from "@/stores/useProjectCreateStore";

/**
 * Validates the Add Project form input.
 * If catch any error, set the error message in the store and return false.
 * @returns {boolean} An boolean true if no errors were found and false if errors were found.
 * @example
 * const errors = validateProjectForm();
 * console.log(errors); // `true` if no errors
 * console.log(errors); // `false` if errors
 */
export const validateProjectForm = (): boolean => {
    const { name, setErrors } = useProjectCreateStore.getState();

    if (!name.trim()) {
        setErrors({ name: "Project name is required." });
        return false;
    }

    return true;
};
