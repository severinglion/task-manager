export class TaskStages {
  static NONE = 0;
  static SALES = 1;
  static CLIENT_ONBOARDING = 2;
  static PART_ONBOARDING = 3;
  static PROGRAM_RUN = 4;
  static POST_PROGRAM = 5;

  static getStageString(stageId) {
    switch (stageId) {
      case 0: return 'None';
      case 1: return 'Sales';
      case 2: return 'Onboarding';
      case 3: return 'Participant Onboarding';
      case 4: return 'Program Runtime';
      case 5: return 'Post Program';
      default: 'Unsupported';
    }
  };

  static getOptions() {
    return [
      {
        label: 'None',
        value: TaskStages.NONE,
      },
      {
        label: 'Sales',
        value: TaskStages.SALES,
      },
      {
        label: 'Client Onboarding',
        value: TaskStages.CLIENT_ONBOARDING,
      },
      {
        label: 'Participant Onboarding',
        value: TaskStages.PART_ONBOARDING,
      },
      {
        label: 'Program Runtime',
        value: TaskStages.PROGRAM_RUN,
      },
      {
        label: 'Post Program',
        value: TaskStages.POST_PROGRAM,
      }
    ]
  };
};

export default TaskStages;