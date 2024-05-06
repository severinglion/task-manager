export class TaskStages {
    static NONE = 0;
    static SALES = 1;
    static ONBOARDING = 2;
  
    static getStageString(stageId) {
      switch(stageId) {
        case 0: return 'None';
        case 1: return 'Sales';
        case 2: return 'Onboarding';
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
          label: 'Onboarding',
          value: TaskStages.ONBOARDING,
        }
      ]
    };
  };

  export default TaskStages;