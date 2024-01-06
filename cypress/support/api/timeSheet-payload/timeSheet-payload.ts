export interface TimeSheetPayload {

    entries: [
        {
          projectId: number,
          activityId: number,
          dates: { string: { duration: string } },
        },
      ],
      deletedEntries: [],
    }

